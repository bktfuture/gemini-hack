from odmantic import EmbeddedModel, Field, ObjectId
from datetime import datetime


class UploadedDocument(EmbeddedModel):
    file_id: ObjectId
    file_name: str
    file_size: int
    uploaded_at: datetime = Field(default_factory=datetime.utcnow)
