from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings, loaded from environment / .env file."""

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", extra="ignore"
    )

    app_name: str = "Blocly API"
    environment: str = "development"

    # Comma-separated list of allowed CORS origins.
    allowed_origins: str = "http://localhost:4321"

    # SMTP — optional. If host/user are unset, submissions are logged
    # instead of emailed, so the app works out of the box in development.
    smtp_host: str | None = None
    smtp_port: int = 587
    smtp_user: str | None = None
    smtp_password: str | None = None
    smtp_from: str = "no-reply@blocly.com"
    contact_recipient: str = "hello@blocly.com"

    @property
    def origins_list(self) -> list[str]:
        return [o.strip() for o in self.allowed_origins.split(",") if o.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()