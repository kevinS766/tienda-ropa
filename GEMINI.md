# Project Overview: Tienda de Ropa

A comprehensive clothing store management system featuring a React frontend and a Python-based backend. The project is structured to follow a multi-role development approach (Backend, Frontend, and DevOps) as outlined in the requirements.

## 🚀 Tech Stack

- **Frontend:** React 19 (Vite), Tailwind CSS 4, Axios.
- **Backend:** Python (FastAPI or Django recommended) + MySQL (Pending Implementation).
- **Infrastructure:** Docker & Docker Compose for local orchestration (Pending Implementation).
- **Design:** Mockups available in `temp_mockup/stitch/`.

## 📁 Directory Structure

- `frontend/`: React application created with Vite.
    - `src/components/`: Reusable UI components (Header, Sidebar, etc.).
    - `src/pages/`: Main application views (Dashboard, etc.).
    - `src/assets/`: Static assets like images and icons.
- `temp_mockup/`: HTML and PNG mockups for different modules (Inventory, Stock Movements, etc.).
- `requerimientos_full.md`: Detailed technical requirements and roles for the project.
- `FRONTEND.md`: Frontend-specific documentation.

## 🛠️ Building and Running

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`
5. Lint the code: `npm run lint`

### Backend
- **TODO:** Implement Python backend as per `requerimientos_full.md`.
- Expected commands: `python -m venv venv`, `source venv/bin/activate`, `pip install -r requirements.txt`, `uvicorn main:app --reload`.

### Infrastructure
- **TODO:** Create `docker-compose.yml` and automation scripts in `/scripts`.

## ⚙️ Development Conventions

### Git Workflow
- **main:** Production-ready code.
- **develop:** Integration branch for features.
- **feature/*:** Individual feature branches (e.g., `feature/backend`, `feature/frontend`, `feature/devops`).

### Frontend Standards
- **Styling:** Use Tailwind CSS for utility-first styling.
- **API Consumption:** Centralize API calls in `src/services/productService.js` using Axios.
- **Components:** Modularize UI into `src/components`.

### Roadmap (Current Tasks)
1. **Frontend:** Implement CRUD interface for products (Forms, Tables, Modals).
2. **Backend:** Initialize Python API with CRUD endpoints for products.
3. **Database:** Set up MySQL schema for products.
4. **DevOps:** Orchestrate services using Docker Compose.
