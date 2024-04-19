from fastapi import FastAPI
from api.database import engine
from api.models.user import User

app = FastAPI()


@app.get("/api/python")
async def hello_world():
    await engine.save(User(name="test1", email="test@gmail.com"))
    return {"Hello": "World"}
