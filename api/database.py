import certifi
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from odmantic import AIOEngine
from api.config import MONGODB_URI, MONGODB_DB_NAME

client = AsyncIOMotorClient(MONGODB_URI, tlsCAFile=certifi.where())
engine = AIOEngine(client=client, database=MONGODB_DB_NAME)
fs = AsyncIOMotorGridFSBucket(client[MONGODB_DB_NAME])