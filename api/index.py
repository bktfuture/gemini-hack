from fastapi import FastAPI
from api.database import engine
from api.models.user import User
from api.routers import gemini_routes, user_routes

app = FastAPI()

app.include_router(gemini_routes.router, prefix="/api/gemini")
app.include_router(user_routes.router, prefix="/api/user")


@app.get("/api/hello-world")
async def hello_world():
    return {"Hello": "World"}
