from api.database import engine
from api.models.user import User
from fastapi import HTTPException
from . import router
from bcrypt import hashpw, gensalt, checkpw


@router.post("/temp-create-user")
async def init_user(first_name, last_name, email):
    user = await engine.find_one(User, User.email == email)
    if user:
        raise HTTPException(status_code=400, detail='user already created')
    await engine.save(User(first_name=first_name, last_name=last_name, email=email))
    return { "response": "user successfully created" }


@router.post("/register-with-password")
async def init_user(first_name, last_name, email, password):
    user = await engine.find_one(User, User.email == email)
    if user:
        raise HTTPException(status_code=400, detail='user already created')
    hashed_pass = hashpw(password.encode('utf-8'), gensalt())
    new_user = await engine.save(User(first_name=first_name, last_name=last_name, email=email, password=hashed_pass.decode('utf-8')))
    return { "response": "user successfully created",
             "user_id":  str(new_user.id)}


@router.get("/auth-user")
async def init_user(email, password):
    user = await engine.find_one(User, User.email == email)
    if user and checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        return { "response": "password correct",
                "user_info": user }
    else:
        raise HTTPException(status_code=400, detail='password wrong')
