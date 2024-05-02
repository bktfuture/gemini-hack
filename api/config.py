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

# Deployment URL
BASE_URL = os.getenv('BASE_URL')

# Client_secret Access
CLIENT_ID = os.getenv('CLIENT_ID')
PROJECT_ID = os.getenv('PROJECT_ID')
AUTH_URI = os.getenv('AUTH_URI')
TOKEN_URI = os.getenv('TOKEN_URI')
AUTH_PROVIDER = os.getenv('AUTH_PROVIDER')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
REDIRECT_URI = os.getenv('REDIRECT_URI')
