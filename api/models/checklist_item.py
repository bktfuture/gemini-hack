from odmantic import EmbeddedModel


class ChecklistItem(EmbeddedModel):
    name: str
    completed: bool = False
