from typing import Annotated, Union

from langchain_community.vectorstores import Qdrant
from langchain_google_genai import GoogleGenerativeAIEmbeddings

from api.config import text_model, image_model, QDRANT_COLLECTION_NAME, GEMINI_API_KEY
from api.database import engine, qdrant_client
from api.models.chat_message import ChatMessage
from api.models.user import User
from . import router
from fastapi import HTTPException, UploadFile, File, Form
from odmantic import ObjectId

from ..utils.file import upload_file_to_gridfs, save_file_in_user
from ..utils.vector_search import load_pdf_from_gridfs, embed_document, create_filtered_retriever, run_rag_chain


@router.post("/message/{user_id}", summary="Send a message")
async def send_message(user_id: str, message: Annotated[str, Form(...)], file: Union[UploadFile, None] = None):
    user = await engine.find_one(User, User.id == ObjectId(user_id))
    if not user:
        raise HTTPException(status_code=400, detail='user not found')

    qdrant = Qdrant(
        client=qdrant_client,
        collection_name=QDRANT_COLLECTION_NAME,
        embeddings=GoogleGenerativeAIEmbeddings(model="models/text-embedding-004", google_api_key=GEMINI_API_KEY)
    )

    if file:
        if file.content_type == 'application/pdf':
            file_id = await upload_file_to_gridfs(user_id, file)
            try:
                await save_file_in_user(user_id, file_id, file)
            except Exception:
                raise HTTPException(status_code=500, detail="Unable to link file to user account")

            # Index (load file and then embed)
            docs = await load_pdf_from_gridfs(file_id)
            qdrant = embed_document(docs)
        else:
            raise HTTPException(status_code=400, detail='File type not supported (Only PDFs)')

    # Create RAG chain
    response = run_rag_chain(message, qdrant, user_id)

    # Save message and response to MongoDB
    user.chat_history.append(ChatMessage(message=message, sender=user_id))
    user.chat_history.append(ChatMessage(message=response, sender='Gemini'))
    await engine.save(user)

    return {"response": response}


@router.get("/chat-history/{user_id}")
async def get_chat_history(user_id):
    user = await engine.find_one(User, User.id == ObjectId(user_id))
    if not user:
        raise HTTPException(status_code=400, detail='user not found')
    return { "response": user.chat_history }