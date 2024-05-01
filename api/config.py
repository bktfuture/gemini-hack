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

# Qdrant Vector DB
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
QDRANT_URI = os.getenv("QDRANT_URI")
QDRANT_COLLECTION_NAME = os.getenv("QDRANT_COLLECTION_NAME")
genai.configure(api_key=GEMINI_API_KEY)
text_model = genai.GenerativeModel('gemini-pro')
image_model = genai.GenerativeModel('gemini-pro-vision')