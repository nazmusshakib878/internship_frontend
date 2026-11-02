# Primeor Solutions - Laravel Backend API

A modern, robust REST API built with **Laravel 11** for the Primeor Solutions web development & internship portal. Designed for instant deployment on **Render**.

---

## ⚡ Local Development

### 1. Requirements
- PHP 8.2+
- Composer 2+

### 2. Setup
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

### 3. Start Development Server
```bash
php artisan serve
```
The API server will run at: **`http://localhost:8000`**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Healthcheck & Laravel version |
| `POST` | `/api/applications` | Submit new internship application |
| `GET` | `/api/applications` | List all applications |
| `GET` | `/api/applications/{id}` | Get application by ID |
| `POST` | `/api/contact` | Submit contact / demo inquiry |
| `GET` | `/api/contact` | List all contact messages |
| `GET` | `/api/content/programs` | Get 3-level internship curriculum |
| `GET` | `/api/content/services` | Get company services |
| `GET` | `/api/content/projects` | Get project showcase gallery |

---

## 🌐 Deploy to Render (Step-by-Step)

### Option A: Deploy with Docker (Recommended)
1. Go to [render.com](https://render.com) and create an account or log in.
2. Click **"New +"** and choose **"Web Service"**.
3. Connect your GitHub repository (`internship_frontend`).
4. Set the following settings:
   - **Root Directory**: `backend`
   - **Runtime**: `Docker`
5. Under **Environment Variables**, add:
   - `APP_NAME`: `Primeor Solutions API`
   - `APP_ENV`: `production`
   - `APP_DEBUG`: `false`
   - `APP_KEY`: *(Generate one using `php artisan key:generate --show` or Render will generate it)*
   - `DB_CONNECTION`: `sqlite`
   - `LOG_CHANNEL`: `stderr`
6. Click **"Create Web Service"**.

---

### Option B: Deploy with Native Environment
1. In Render, select **Runtime**: `PHP` / `Native`.
2. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `./render-build.sh`
   - **Start Command**: `php artisan serve --host=0.0.0.0 --port=$PORT`
3. Add the required Environment Variables listed above.

---

## 🔗 Connect to Frontend (Vercel)
Once your backend is live on Render (e.g., `https://primeor-backend.onrender.com`), configure your frontend environment variable in Vercel:
```env
VITE_API_URL=https://primeor-backend.onrender.com/api
```
All form submissions and content requests will instantly route through your Laravel API!
