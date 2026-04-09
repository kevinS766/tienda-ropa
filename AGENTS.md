# AGENTS.md — Contexto del proyecto para agentes de IA

Este archivo describe la arquitectura, convenciones y reglas del proyecto para que cualquier agente de IA pueda trabajar en él de forma efectiva.

---

## Descripción general

**Tienda Ropa** es una aplicación web de gestión de inventario para una tienda de ropa. Permite realizar operaciones CRUD sobre productos (nombre, descripción, precio, stock).

Arquitectura desacoplada:
- **Frontend**: React 19 + Vite + Tailwind CSS 4 → corre en `localhost:5173`
- **Backend**: Python FastAPI + SQLAlchemy → corre en `localhost:8000`
- **Base de datos**: MySQL → corre en `localhost:3306`, base de datos `tienda_ropa`

---

## Estructura del repositorio

```
tienda-ropa/
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── components/     # Sidebar.jsx, Header.jsx
│   │   ├── pages/          # Dashboard.jsx, Products.jsx
│   │   └── services/
│   │       └── productService.js   # Todas las llamadas al backend (Axios)
│   ├── tailwind.config.js  # Tema Material Design 3 personalizado
│   └── vite.config.js
├── backend/                # API REST en FastAPI
│   ├── main.py             # Entry point: crea la app, configura CORS, monta routers
│   ├── database.py         # Engine SQLAlchemy + SessionLocal + Base
│   ├── models.py           # ORM: tabla `productos`
│   ├── schemas.py          # Pydantic: ProductoCreate, ProductoResponse
│   ├── crud.py             # Lógica de negocio: get, create, update, delete
│   ├── routers/
│   │   └── productos.py    # 5 endpoints REST para /productos
│   ├── requirements.txt
│   └── .env.example
├── AGENTS.md               # Este archivo
├── README.md
├── INSTRUCCIONES_EQUIPO.md
└── FRONTEND.md
```

---

## Backend — reglas y convenciones

- **Framework**: FastAPI con Python 3.10+
- **ORM**: SQLAlchemy 2.x con `DeclarativeBase`
- **Schemas**: Pydantic v2 (`model_config = ConfigDict(from_attributes=True)`)
- **Variables de entorno**: cargadas con `python-dotenv` desde `.env` (ver `.env.example`)
- **Puerto**: 8000 siempre
- **CORS**: permitido solo para `http://localhost:5173`
- **Arrancar**: `uvicorn main:app --reload --port 8000` desde la carpeta `backend/`

### Endpoints existentes

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/productos` | Listar todos |
| GET | `/productos/{id}` | Obtener uno (404 si no existe) |
| POST | `/productos` | Crear (devuelve 201) |
| PUT | `/productos/{id}` | Actualizar (404 si no existe) |
| DELETE | `/productos/{id}` | Eliminar (204, 404 si no existe) |

### Modelo de datos — tabla `productos`

| Campo | Tipo | Restricciones |
|-------|------|---------------|
| id | INT | PK, AUTO_INCREMENT |
| nombre | VARCHAR(255) | NOT NULL |
| descripcion | TEXT | nullable |
| precio | DECIMAL(10,2) | NOT NULL |
| stock | INT | NOT NULL, DEFAULT 0 |

---

## Frontend — reglas y convenciones

- **Framework**: React 19 con hooks (useState, useEffect), sin librería de estado global
- **Estilos**: Tailwind CSS 4 con tema Material Design 3 (ver `tailwind.config.js`)
- **HTTP client**: Axios, centralizado en `frontend/src/services/productService.js`
- **URL del backend**: configurada via `VITE_API_URL` en `.env` (default: `http://localhost:8000`)
- **Arrancar**: `npm run dev` desde la carpeta `frontend/`

### Páginas existentes
- `Dashboard.jsx`: métricas estáticas (pendiente conectar a backend)
- `Products.jsx`: CRUD completo de productos con modales y validación

### Agregar nuevas páginas
1. Crear el archivo en `frontend/src/pages/`
2. Añadir el caso en `App.jsx` dentro del condicional de `currentPage`
3. Agregar el item en `Sidebar.jsx`
4. Si necesita datos del backend, crear la función en `productService.js`

---

## Git — flujo de trabajo

- **Rama principal**: `main` (producción)
- **Rama de integración**: `develop`
- **Ramas de feature**: `feature/<nombre>` creadas desde `develop`
- **Pull Requests**: siempre hacia `develop`, nunca directamente a `main`

---

## Lo que falta implementar

- Conexión del Dashboard a datos reales del backend
- Página de Stock
- Página de Reportes
- Búsqueda de productos desde el Header
- Autenticación / login
- Filtros por talla y color
