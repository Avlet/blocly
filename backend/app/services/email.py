import logging
from email.message import EmailMessage

import aiosmtplib

from app.core.config import Settings

logger = logging.getLogger("blocly.email")


async def send_contact_email(
    settings: Settings,
    *,
    name: str,
    email: str,
    company: str | None,
    message: str,
) -> None:
    """Send the contact submission as an email.

    If SMTP isn't configured, the submission is logged instead so the
    endpoint remains fully functional in local development.
    """
    body = (
        "New contact submission from the Blocly website:\n\n"
        f"Name:    {name}\n"
        f"Email:   {email}\n"
        f"Company: {company or '—'}\n\n"
        "Message:\n"
        f"{message}\n"
    )

    if not settings.smtp_host or not settings.smtp_user:
        logger.warning("SMTP not configured — logging submission instead of sending.")
        logger.info("CONTACT SUBMISSION\n%s", body)
        return

    msg = EmailMessage()
    msg["From"] = settings.smtp_from
    msg["To"] = settings.contact_recipient
    msg["Reply-To"] = email
    subject_company = f" ({company})" if company else ""
    msg["Subject"] = f"New enquiry from {name}{subject_company}"
    msg.set_content(body)

    await aiosmtplib.send(
        msg,
        hostname=settings.smtp_host,
        port=settings.smtp_port,
        username=settings.smtp_user,
        password=settings.smtp_password,
        start_tls=True,
    )
    logger.info("Contact email sent to %s", settings.contact_recipient)