from fastapi import APIRouter
import os
from ..config import GEMINI_API_KEY, genai, text_model, image_model
router = APIRouter()

# Access the Gemini API key
genai.configure(api_key=GEMINI_API_KEY)

chat = text_model.start_chat(history=[])

@router.post("/message")
def send_message(message):
    response = chat.send_message(message)
    return {"Gemini API test response": response.text}