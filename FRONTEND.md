# Documentación Frontend - AARRRON

Este documento detalla la arquitectura y el funcionamiento de la interfaz de usuario.

## 🏗️ Componentes Principales

- **Sidebar:** Navegación lateral que gestiona el estado de la página actual.
- **Header:** Barra superior con información de contexto.
- **Dashboard:** Panel visual con métricas y visión general del negocio.
- **Products:** Interfaz CRUD completa para la gestión de productos (Ropa).
  - Incluye tabla de visualización.
  - Modales para creación y edición.
  - Validaciones de campos (Precio > 0, Stock >= 0).
  - Feedback visual mediante mensajes de éxito/error.

## 🔌 Consumo de API

Toda la comunicación con el backend se centraliza en `src/services/productService.js`.

### Endpoints Utilizados
- `GET /productos`: Lista todos los productos.
- `GET /productos/{id}`: Obtiene un producto por su ID.
- `POST /productos`: Crea un nuevo producto.
- `PUT /productos/{id}`: Actualiza un producto existente.
- `DELETE /productos/{id}`: Elimina un producto.

## 🌐 Variables de Entorno

La aplicación utiliza las siguientes variables definidas en `.env`:

- `VITE_API_URL`: URL base del servidor backend (Default: `http://localhost:8000`).

## 🎨 Estilos y UI

Se utiliza **Tailwind CSS 4** para el estilado, siguiendo una paleta de colores personalizada definida en `index.css` y `tailwind.config.js` (basada en el diseño minimalista de la tienda).
