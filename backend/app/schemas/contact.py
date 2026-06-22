from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    company: str | None = Field(default=None, max_length=120)
    message: str = Field(min_length=10, max_length=4000)
    # Honeypot: real users never see or fill this. Bots do.
    website: str = Field(default="", max_length=0)

    model_config = {
        "json_schema_extra": {
            "example": {
                "name": "Ada Lovelace",
                "email": "ada@example.com",
                "company": "Analytical Engines",
                "message": "We're launching a token and need a coordinated growth plan.",
            }
        }
    }


class ContactResponse(BaseModel):
    success: bool
    message: str