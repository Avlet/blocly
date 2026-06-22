# Blocly

Marketing site for Blocly — a Web2 & Web3 growth marketing agency.

- **`frontend/`** — Astro 5 + Tailwind v4 + TypeScript (static SSG)
- **`backend/`** — FastAPI (contact form + future dynamic endpoints)

---

## Quick start

### 1. Backend (FastAPI)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```
Runs at **http://localhost:8000** · docs at **/docs**.

### 2. Frontend (Astro)
In a second terminal:
```bash
cd frontend
npm install
cp .env.example .env               # PUBLIC_API_BASE_URL=http://localhost:8000
npm run dev
```
Runs at **http://localhost:4321**.

That's the reliable, two-terminal setup. The contact form on the homepage
posts to the backend; with no SMTP configured, submissions print to the
backend console so you can verify the wiring immediately.

---

## One-command dev (optional)

From the repo root, with the backend venv **already activated** so `python`
resolves to it:
```bash
npm install            # installs `concurrently` at the root
npm run dev            # starts frontend + backend together
```
If you'd rather not manage the venv on PATH, stick with the two-terminal
flow above.

---

## How the pieces connect
- The frontend reads `PUBLIC_API_BASE_URL` (default `http://localhost:8000`)
  and posts to `POST /api/contact`.
- The backend's `ALLOWED_ORIGINS` (default `http://localhost:4321`) must
  include the frontend origin for CORS.
- Change either value in the respective `.env` when deploying.

## Project layout
```
blocly/
├── frontend/   # Astro app  (see frontend/README.md)
├── backend/    # FastAPI app (see backend/README.md)
├── package.json
└── README.md
```