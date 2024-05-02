from odmantic import Model, Field
from typing import List, Optional
from datetime import datetime
from .uploaded_document import UploadedDocument
from .chat_message import ChatMessage
from .checklist_item import ChecklistItem


class User(Model):
    first_name: str
    last_name: str
    email: str
    google_oauth_id: Optional[str] = None
    password: Optional[str] = None
    uploaded_documents: List[UploadedDocument] = []
    chat_history: List[ChatMessage] = []
    checklist: List[ChecklistItem] = []
    personal_info: Optional[dict] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = {
        "collection": "users"
    }
