from fastapi import FastAPI
import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv('api/.env')

# Access the Gemini API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-pro')

app = FastAPI()


@app.get("/api/python")
def hello_world():
    return {"message": [m.name for m in genai.list_models() if 'generateContent' in m.supported_generation_methods]}

@app.get("/api/test")
def test():
    response = model.generate_content("What is FastAPI?")
    return {"Gemini API test response": response.text}
