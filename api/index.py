from fastapi import FastAPI
from api.database import engine
from api.models.user import User
from api.routers import gemini_routes, user_routes, files

app = FastAPI()

app.include_router(gemini_routes.router, prefix="/api/v1/gemini")
app.include_router(files.router, prefix="/api/v1/files")
app.include_router(user_routes.router, prefix="/api/v1/user")


@app.get("/api/hello-world")
async def hello_world():
    return {"Hello": "World"}
