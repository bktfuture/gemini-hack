from dotenv import load_dotenv
import google.generativeai as genai
import os

# Load environment variables from .env file
load_dotenv('.env')

# Access the Gemini API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# MongoDB connection URI
MONGODB_URI = os.getenv("DB_URI")
MONGODB_DB_NAME = os.getenv("DB_NAME")
genai.configure(api_key=GEMINI_API_KEY)
text_model = genai.GenerativeModel('gemini-pro')
image_model = genai.GenerativeModel('gemini-pro-vision')