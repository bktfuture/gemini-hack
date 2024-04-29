from fastapi import FastAPI
from api.routers import gemini_routes, user_routes, files
from api.oauth import oauth
from starlette.middleware.sessions import SessionMiddleware


app = FastAPI()

app.include_router(gemini_routes.router, prefix="/api/v1/gemini")
app.include_router(files.router, prefix="/api/v1/files")
app.include_router(user_routes.router, prefix="/api/v1/user")
app.include_router(oauth.router, prefix="/api/v1/glogin")

app.add_middleware(SessionMiddleware, secret_key='<any string>')

@app.get("/api/hello-world")
async def hello_world():
    return {"Hello": "World"}
