from api.config import text_model, image_model
from api.database import engine
from api.models.chat_message import ChatMessage
from api.models.user import User
from . import router
from fastapi import HTTPException


# user: chat_history
chat = {}

@router.post("/message")
async def send_message(message, email):
    user = await engine.find_one(User, User.email == email)
    if not user:
        raise HTTPException(status_code=400, detail='user not found')
    # initialize a new chat if the user is new
    chat[email] = chat.get(email, text_model.start_chat(history=[]))
    response = chat[email].send_message(message)
    user.chat_history.append(ChatMessage(message=message, sender=str(user.id)))
    user.chat_history.append(ChatMessage(message=response.text, sender='gemini'))
    await engine.save(user)
    return { "response": response.text }

@router.get("/chat-history")
async def get_chat_history(email):
    user = await engine.find_one(User, User.email == email)
    if not user:
        raise HTTPException(status_code=400, detail='user not found')
    return { "response": user.chat_history }
    