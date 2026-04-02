# Guía de Entrega y Estado del Proyecto - Tienda de Ropa

Este documento resume el estado actual del desarrollo frontend y proporciona instrucciones específicas para los roles de Backend e Infraestructura.

---

## 📍 Información General del Repositorio
*   **Repositorio oficial:** `https://github.com/kevinS766/tienda-ropa`
*   **Rama de Producción:** `main` (Limpia y funcional).
*   **Rama de Desarrollo:** `develop` (Punto de partida para nuevas funcionalidades).

### Estrategia de Ramas (Git Workflow)
Cada integrante debe sacar su propia rama desde `develop` siguiendo el estándar:
*   Backend: `feature/backend`
*   Infraestructura: `feature/devops`

---

## 🐍 Instrucciones para BACKEND (Python + MySQL)

El frontend ya está preparado para conectarse. Aquí tienes los detalles técnicos:

1.  **Carpeta de trabajo:** Debes crear tu carpeta `/backend` en la raíz del proyecto.
2.  **Consumo de API:** El frontend está configurado para conectarse a `http://localhost:8000`.
3.  **Endpoints implementados (Frontend listo):**
    *   `GET /productos`: Listar todos los productos.
    *   `GET /productos/{id}`: Detalle de un producto.
    *   `POST /productos`: Crear producto (JSON esperado: nombre, descripcion, precio, stock).
    *   `PUT /productos/{id}`: Actualizar producto.
    *   `DELETE /productos/{id}`: Eliminar producto.
4.  **Lógica de Servicio:** Puedes revisar la lógica de las peticiones en `frontend/src/services/productService.js`.
5.  **Gitignore:** Ya está configurado para ignorar automáticamente `venv/`, `__pycache__` y archivos `.pyc`. No necesitas tocar el `.gitignore` raíz.

---

## 🐳 Instrucciones para INFRAESTRUCTURA (DevOps + Docker)

El entorno local debe ser orquestado para que todos los servicios se comuniquen correctamente:

1.  **Puertos:**
    *   Frontend (Vite): Puerto por defecto `5173`.
    *   Backend (API): Puerto esperado `8000`.
    *   Base de Datos (MySQL): Puerto `3306`.
2.  **Variables de Entorno:**
    *   El frontend utiliza la variable `VITE_API_URL` para definir la dirección del backend.
    *   Por favor, crea un archivo `.env.example` en la raíz con las credenciales de DB y URLs necesarias.
3.  **Tareas Pendientes:**
    *   Crear la carpeta `/scripts` con los comandos de automatización (`start.sh`, `stop.sh`).
    *   Implementar el archivo `docker-compose.yml` en la raíz.
4.  **Configuración de Red:** Asegúrate de que los contenedores compartan una red para que el frontend pueda resolver las peticiones al backend.

---

## 📄 Documentación Adicional
*   `README.md`: Instrucciones generales de instalación.
*   `FRONTEND.md`: Detalle técnico de la arquitectura React y componentes implementados.

---
*Este documento ha sido generado para asegurar una integración fluida entre los tres roles del proyecto.*
