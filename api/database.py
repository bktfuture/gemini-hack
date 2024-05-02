import certifi
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from odmantic import AIOEngine
from qdrant_client import QdrantClient

from api.config import MONGODB_URI, MONGODB_DB_NAME, QDRANT_URI, QDRANT_API_KEY

client = AsyncIOMotorClient(MONGODB_URI, tlsCAFile=certifi.where())
engine = AIOEngine(client=client, database=MONGODB_DB_NAME)
fs = AsyncIOMotorGridFSBucket(client[MONGODB_DB_NAME])
qdrant_client = QdrantClient(
    url=QDRANT_URI,
    api_key=QDRANT_API_KEY
)