from odmantic import Model, Field, EmbeddedModel
from typing import List, Optional
from datetime import datetime


class UploadedDocument(EmbeddedModel):
    filename: str
    file_type: str
    file_data: bytes
    uploaded_at: datetime = Field(default_factory=datetime.utcnow)


class ChatMessage(EmbeddedModel):
    message: str
    sender: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class ChecklistItem(EmbeddedModel):
    name: str
    completed: bool = False


class User(Model):
    username: str
    first_name: str
    last_name: str
    email: str
    google_oauth_id: Optional[str] = None
    uploaded_documents: List[UploadedDocument] = []
    chat_history: List[ChatMessage] = []
    checklist: List[ChecklistItem] = []
    personal_info: Optional[dict] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = {
        "collection": "users"
    }
