# Primeor Solutions - Backend API

Express.js REST API providing application management, contact inquiry handling, and content delivery for the Primeor Solutions portal.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` (already done by default):
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Run Development Server
```bash
npm run dev
# or for standard start:
npm start
```
The server will start on `http://localhost:5000`.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/` | API overview and documentation |
| `GET`  | `/api/health` | Healthcheck and server uptime |
| `POST` | `/api/applications` | Submit new internship application |
| `GET`  | `/api/applications` | List all submitted applications |
| `GET`  | `/api/applications/:id` | Get specific application details |
| `POST` | `/api/contact` | Submit contact / demo message |
| `GET`  | `/api/contact` | List received contact inquiries |
| `GET`  | `/api/content/programs` | Get curriculum & program levels |
| `GET`  | `/api/content/services` | Get company services |
| `GET`  | `/api/content/projects` | Get project showcase gallery |

