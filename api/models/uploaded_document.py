from odmantic import EmbeddedModel, Field
from datetime import datetime


class UploadedDocument(EmbeddedModel):
    filename: str
    file_type: str
    file_data: bytes
    uploaded_at: datetime = Field(default_factory=datetime.utcnow)
