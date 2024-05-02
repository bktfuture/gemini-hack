from api.config import text_model, image_model
from api.database import engine
from api.models.chat_message import ChatMessage
from api.models.user import User
from . import router
from fastapi import HTTPException
from odmantic import ObjectId


# user: chat_history
chat = {}

@router.post("/message/{user_id}", summary="Send a message")
async def send_message(message, user_id):
    user = await engine.find_one(User, User.id == ObjectId(user_id))
    if not user:
        raise HTTPException(status_code=400, detail='user not found')
    # initialize a new chat if the user is new
    chat[user_id] = chat.get(user_id, text_model.start_chat(history=[]))
    response = chat[user_id].send_message(message)
    user.chat_history.append(ChatMessage(message=message, sender=user_id))
    user.chat_history.append(ChatMessage(message=response.text, sender='gemini'))
    await engine.save(user)
    return { "response": response.text }

@router.get("/chat-history/{user_id}")
async def get_chat_history(user_id):
    user = await engine.find_one(User, User.id == ObjectId(user_id))
    if not user:
        raise HTTPException(status_code=400, detail='user not found')
    return { "response": user.chat_history }