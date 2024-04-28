from api.database import engine
from api.models.user import User
from fastapi import HTTPException
from . import router

@router.post("/temp-create-user")
async def init_user(username, first_name, last_name, email):
    user = await engine.find_one(User, User.email == email)
    if user:
        raise HTTPException(status_code=400, detail='user already created')
    await engine.save(User(username=username, first_name=first_name, last_name=last_name, email=email))
    return { "response": "user successfully created" }