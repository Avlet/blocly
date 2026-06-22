import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))
import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import contact
from app.core.config import get_settings

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)-7s  %(name)s  %(message)s",
)

settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    description="Backend API for the Blocly marketing site.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://aapka-frontend-ka-naya-url.onrender.com"], # Yahan frontend ka live URL dalein
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router)


@app.get("/health", tags=["health"])
async def health() -> dict[str, str]:
    return {"status": "ok", "service": settings.app_name}