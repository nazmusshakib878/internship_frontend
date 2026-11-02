# Primeor Solutions - Full Stack Portal (Laravel + React)

A full-stack web application implementing the Figma design for the Primeor Solutions portal.
- **Frontend**: React + TypeScript + Vite + Tailwind CSS (Deployed on **Vercel**)
- **Backend**: Laravel 11 REST API (Deployed on **Render**)

---

## 📁 Project Architecture

```
internship/
├── frontend/                     # React + Vite + TypeScript (Target: Vercel)
│   ├── src/
│   │   ├── components/           # UI components matching Figma design
│   │   ├── services/api.ts       # Connected to Laravel REST API
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── README.md
│
├── backend/                      # Laravel 11 REST API (Target: Render)
│   ├── app/
│   │   ├── Http/Controllers/Api/ # ApplicationController, ContactController, ContentController
│   │   └── Models/               # Application & Contact Eloquent Models
│   ├── database/
│   │   ├── migrations/           # Applications & Contacts schema
│   │   └── data/                 # JSON catalogs (programs, services, projects)
│   ├── routes/
│   │   └── api.php               # API Endpoints
│   ├── config/cors.php           # Configured to allow Vercel origins
│   ├── Dockerfile                # Production Docker container for Render
│   ├── render.yaml               # Render Blueprint specification
│   ├── render-build.sh           # Native build script for Render
│   └── README.md
│
└── README.md
```

---

## 🚀 Deployment Instructions

### 1. Deploy Backend on Render
1. Go to [Render.com](https://render.com) and click **New +** &rarr; **Web Service**.
2. Connect your GitHub repository (`internship_frontend`).
3. Set:
   - **Root Directory**: `backend`
   - **Runtime**: `Docker`
4. In **Environment Variables**, add:
   - `APP_NAME`: `Primeor Solutions API`
   - `APP_ENV`: `production`
   - `APP_DEBUG`: `false`
   - `APP_KEY`: *(Generate via `php artisan key:generate --show` or Render will generate it)*
   - `DB_CONNECTION`: `sqlite`
   - `LOG_CHANNEL`: `stderr`
5. Click **Create Web Service**. Note your Render service URL (e.g., `https://primeor-backend.onrender.com`).

---

### 2. Deploy Frontend on Vercel
1. Go to [Vercel.com](https://vercel.com) and click **Add New...** &rarr; **Project**.
2. Import your GitHub repository (`internship_frontend`).
3. Under **Root Directory**, click `Edit` and select **`frontend`**.
4. In **Environment Variables**, add:
   - `VITE_API_URL`: `https://your-render-backend-url.onrender.com/api`
5. Click **Deploy**!

---

## 💻 Local Development

### Run Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```
Backend runs at `http://127.0.0.1:8000`.

### Run Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`.
