# Primeor Solutions - Full Stack Portal (Internship & Services)

This project contains the complete code implementation of the Figma design, neatly separated into two distinct folders: **`frontend`** and **`backend`**.

---

## 📁 Project Structure

```
internship/
├── frontend/                     # React + Vite + TypeScript + Tailwind CSS Frontend
│   ├── public/
│   │   └── favicon.svg           # Custom favicon
│   ├── src/
│   │   ├── components/           # Component library from Figma design
│   │   │   ├── navbar.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── program-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── interactive-section.tsx
│   │   │   ├── project-gallery.tsx
│   │   │   ├── contact-footer.tsx
│   │   │   └── image-with-fallback.tsx
│   │   ├── services/
│   │   │   └── api.ts            # Client API connecting to Express backend
│   │   ├── App.tsx               # Root component aligning all sections
│   │   ├── main.tsx              # React mounting entrypoint
│   │   └── index.css             # Tailwind base & custom scrollbar styles
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── README.md
│
├── backend/                      # Node.js + Express REST API Backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── applicationController.js  # Manages internship applications
│   │   │   ├── contactController.js      # Manages messages & inquiries
│   │   │   └── contentController.js      # Serves dynamic program & project data
│   │   ├── routes/
│   │   │   ├── applicationRoutes.js
│   │   │   ├── contactRoutes.js
│   │   │   └── contentRoutes.js
│   │   ├── data/                 # Data catalogs
│   │   │   ├── programs.json     # 3-level internship curriculum
│   │   │   ├── services.json     # Services list & metadata
│   │   │   └── projects.json     # Gallery showcase items
│   │   ├── middleware/
│   │   │   └── errorHandler.js   # Global error handling middleware
│   │   ├── storage/
│   │   │   ├── applications.json # Persisted internship applications
│   │   │   └── contacts.json     # Persisted contact messages
│   │   └── server.js             # Express app entrypoint with CORS & routes
│   ├── package.json
│   ├── .env.example
│   ├── .env
│   └── README.md
│
└── README.md                     # Root project documentation
```

---

## 🚀 How to Run the Project

### 1. Start the Backend
Open a terminal in the root directory:
```bash
cd backend
npm install
npm run dev
```
The backend will start at **`http://localhost:5000`**.

### 2. Start the Frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
The frontend will start at **`http://localhost:5173`**.

---

## 🎯 Key Highlights
1. **Pixel-Perfect Alignment with Figma**:
   - Matching color palettes (Electric Blue `#2563EB`, Cyan `#06B6D4`, Deep Navy `#0A1628`).
   - Responsive layouts across mobile, tablet, and desktop screens.
   - Smooth anchor navigation across all sections (`#home`, `#about`, `#programs`, `#services`, `#interactive`, `#projects`, `#contact`).

2. **Full-Stack Connectivity**:
   - **Apply for Internship Form**: Validated and connected to `POST /api/applications`. Data is persisted on the backend.
   - **Interactive Contact Demo**: Validated and connected to `POST /api/contact`.
   - **Real-Time Interactive Elements**: Color changer, Greeting generator, and Calculator in the interactive section.
   - **Auto-Sliding Project Gallery**: With full-screen lightbox modal and pause/play controls.

