from fastapi import FastAPI
from api.routers import gemini_routes, user_routes, files
from api.oauth import oauth
from starlette.middleware.sessions import SessionMiddleware
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",  # Replace with your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(gemini_routes.router, prefix="/api/v1/gemini")
app.include_router(files.router, prefix="/api/v1/files")
app.include_router(user_routes.router, prefix="/api/v1/user")
app.include_router(oauth.router, prefix="/api/v1/glogin")

app.add_middleware(SessionMiddleware, secret_key='<any string>')


@app.get("/api/hello-world")
async def hello_world():
    return {"Hello": "World"}
