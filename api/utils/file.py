from bson import ObjectId
from fastapi import UploadFile

from api.database import fs, engine
from api.models.uploaded_document import UploadedDocument
from api.models.user import User


async def upload_file_to_gridfs(user_id: str, file: UploadFile) -> ObjectId:
    # Save file/document to GridFS
    file_id = await fs.upload_from_stream(
        file.filename,
        file.file,
        metadata={"userId": user_id, "contentType": file.content_type, "fileSize": file.size}
    )
    return file_id


async def save_file_in_user(user_id: str, file_id: ObjectId, file: UploadFile):
    # Get user to store file under
    user = await engine.find_one(User, User.id == ObjectId(user_id))

    if user:
        user.uploaded_documents.append(
            UploadedDocument(file_id=file_id, file_name=file.filename, file_type=file.content_type, file_size=file.size)
        )
        await engine.save(user)
    else:
        raise Exception("User does not exist")
