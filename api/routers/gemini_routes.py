from api.config import GEMINI_API_KEY, genai, text_model, image_model
from api.database import engine
from api.models.chat_message import ChatMessage
from api.models.user import User
from . import router


# Access the Gemini API key
genai.configure(api_key=GEMINI_API_KEY)

# user: chat history
chat = {}


@router.post("/message")
async def send_message(message, email):
    user = await engine.find_one(User, User.email == email)
    if not user:
        return {
            "status": False,
            "response": 'User is not found'
		}
    # initialize a new chat if the user is new
    chat[email] = chat.get(email, text_model.start_chat(history=[]))
    response = chat[email].send_message(message)
    user.chat_history.append(ChatMessage(message=message, sender='user'))
    user.chat_history.append(ChatMessage(message=response.text, sender='gemini'))
    await engine.save(user)
    return {
        "status": True,
        "response": response.text
    }

@router.get("/chat-history")
async def get_chat_history(email):
    user = await engine.find_one(User, User.email == email)
    if not user:
        return {
            "status": False,
            "response": 'User is not found'
		}
    return user.chat_history
    