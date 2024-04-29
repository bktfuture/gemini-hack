from fastapi import APIRouter, UploadFile, File, Depends

from api.models.uploaded_document import UploadedDocument
from api.models.user import User
from api.database import engine, fs
from odmantic import ObjectId

router = APIRouter()


@router.post("/upload/{user_id}", summary="Upload a file/document")
async def upload_file(user_id: str, file: UploadFile = File(...)):
    # Save file/document to GridFS
    file_id = await fs.upload_from_stream(
        file.filename,
        file.file,
        metadata={"userId": user_id, "contentType": file.content_type, "fileSize": file.size}
    )

    # Get user to store file under
    user = await engine.find_one(User, User.id == ObjectId(user_id))

    if user:
        user.uploaded_documents.append(
            UploadedDocument(file_id=file_id, file_name=file.filename, file_type=file.content_type, file_size=file.size)
        )
        await engine.save(user)
        return {"message": "File uploaded successfully"}
    else:
        return {"message": "User not found"}
