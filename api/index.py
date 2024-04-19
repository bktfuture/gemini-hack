from fastapi import FastAPI
from api.database import engine
from api.models.user import User
from api.routers import gemini

app = FastAPI()

app.include_router(gemini.router, prefix="/gemini")


@app.get("/api/python")
async def hello_world():
    await engine.save(User(name="test1", email="test@gmail.com"))
    return {"Hello": "World"}
