import logging

from fastapi import APIRouter, Depends, HTTPException, Request, status

from app.core.config import Settings, get_settings
from app.core.rate_limit import rate_limit
from app.schemas.contact import ContactRequest, ContactResponse
from app.services.email import send_contact_email

logger = logging.getLogger("blocly.contact")

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(
    payload: ContactRequest,
    request: Request,
    settings: Settings = Depends(get_settings),
) -> ContactResponse:
    rate_limit(request)

    # Honeypot tripped — silently accept so bots get no signal.
    if payload.website:
        logger.info("Honeypot triggered; dropping submission from %s", payload.email)
        return ContactResponse(
            success=True, message="Thanks — we'll be in touch shortly."
        )

    try:
        await send_contact_email(
            settings,
            name=payload.name,
            email=payload.email,
            company=payload.company,
            message=payload.message,
        )
    except Exception:  # noqa: BLE001 - surface a friendly error, log the detail
        logger.exception("Failed to process contact submission")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="We couldn't send your message right now. Please email us directly.",
        )

    return ContactResponse(
        success=True,
        message="Thanks — we'll be in touch within one business day.",
    )