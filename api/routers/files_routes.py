from fastapi import APIRouter, UploadFile, File, HTTPException
from api.utils.file import upload_file_to_gridfs, save_file_in_user

router = APIRouter()


@router.post("/upload/{user_id}", summary="Upload a file/document")
async def upload_file(user_id: str, file: UploadFile = File(...)):
    file_id = await upload_file_to_gridfs(user_id, file)

    try:
        await save_file_in_user(user_id, file_id, file)
    except Exception:
        raise HTTPException(status_code=500, detail="Unable to link file to user account")

    return {"message": "File uploaded successfully"}
