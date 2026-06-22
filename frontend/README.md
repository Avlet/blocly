# Blocly — Backend (FastAPI)

Handles contact-form submissions for the Blocly site. Built to grow into
any future dynamic endpoints.

## Setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env             # adjust values as needed
```

## Run
```bash
uvicorn app.main:app --reload --port 8000
```
- API root: http://localhost:8000
- Interactive docs: http://localhost:8000/docs
- Health check: http://localhost:8000/health

## Endpoint
`POST /api/contact`
```json
{ "name": "Ada", "email": "ada@example.com", "company": "Engines", "message": "Hello there." }
```
Returns `{ "success": true, "message": "..." }`.

## Email behaviour
If `SMTP_*` values are unset in `.env`, submissions are **logged to the
console** rather than emailed — so the form works immediately in dev.
Fill in real SMTP credentials to send actual email.

## Notes
- A small in-memory rate limiter caps each IP at 5 requests/minute.
- A hidden honeypot field (`website`) filters out basic bots.
- For production, run behind a process manager (e.g. `gunicorn -k uvicorn.workers.UvicornWorker`)
  and back the rate limiter with Redis.