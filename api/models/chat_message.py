from odmantic import EmbeddedModel, Field
from datetime import datetime


class ChatMessage(EmbeddedModel):
    message: str
    sender: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
