# Tienda de Ropa (AARRRON) - Inventory Management System

Sistema integral de gestión de inventario para una tienda de ropa, desarrollado con una arquitectura desacoplada de Frontend y Backend.

## 🚀 Stack Tecnológico

- **Frontend:** React 19 + Vite + Tailwind CSS 4 + Axios.
- **Backend:** Python (FastAPI/Django) + MySQL (Por implementar).
- **Control de Versiones:** Git (Flujo de ramas feature/develop/main).

## 📁 Estructura del Proyecto

```text
/
├── frontend/             # Aplicación React
│   ├── src/
│   │   ├── components/   # Componentes reutilizables (Sidebar, Header)
│   │   ├── pages/        # Vistas principales (Dashboard, Products)
│   │   ├── services/     # Lógica de consumo de API (productService)
│   │   └── utils/        # Funciones de utilidad
├── temp_mockup/          # Diseños y mockups originales
├── README.md             # Documentación general
└── FRONTEND.md           # Documentación específica del frontend
```

## 🛠️ Instalación y Ejecución Local

### Requisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos
1. Clonar el repositorio.
2. Navegar al frontend: `cd frontend`
3. Instalar dependencias: `npm install`
4. Configurar variables de entorno (opcional):
   Crea un archivo `.env` en la carpeta `frontend` con:
   `VITE_API_URL=http://localhost:8000`
5. Iniciar servidor de desarrollo: `npm run dev`

## 🌿 Flujo de Trabajo (Git)

- **main:** Rama de producción.
- **develop:** Rama de integración para desarrollo.
- **feature/*:** Ramas individuales para cada rol (`feature/frontend`, `feature/backend`, `feature/devops`).

Realiza commits claros y descriptivos siguiendo el estándar del equipo.
