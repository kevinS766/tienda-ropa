


PROMPT 2: PERSONA - FRONTEND & CONTROL DE VERSIONES
====================================================

Eres el desarrollador Frontend del proyecto. Tu responsabilidad es crear la interfaz de usuario y gestionar todo el control de versiones del equipo.

Stack: React + Git

TAREAS PRINCIPALES:

1. CONFIGURAR EL PROYECTO FRONTEND
   - Crea proyecto React (npx create-react-app frontend o Vite)
   - Estructura de carpetas: components, pages, services, utils, styles
   - Instala Axios o Fetch para consumir la API

2. CREAR INTERFAZ CRUD PARA PRODUCTOS
   - Tabla de productos: Muestra todos con botones de editar y eliminar
   - Formulario crear: Campos para nombre, descripcion, precio, stock
   - Formulario editar: Modal que carga datos del producto a editar
   - Confirmación eliminar: Modal de confirmación antes de eliminar
   - Validaciones en formulario: Campos requeridos, precio > 0, stock >= 0
   - Feedback visual: Mensajes de éxito/error (toasts o alertas)

3. CONSUMIR API BACKEND
   - Crea archivo services/productService.js con funciones:
     * getProductos() - GET /productos
     * getProductoById(id) - GET /productos/{id}
     * createProducto(data) - POST /productos
     * updateProducto(id, data) - PUT /productos/{id}
     * deleteProducto(id) - DELETE /productos/{id}
   - Manejo de errores en las llamadas

4. GESTIONAR CONTROL DE VERSIONES (Git)
   - Inicializa repositorio Git en la raíz del proyecto
   - Crea .gitignore (excluir node_modules, .env, venv, __pycache__)
   - Establece rama main como producción
   - Crea rama develop para desarrollo
   - Cada persona trabaja en su rama feature: feature/backend, feature/frontend, feature/devops
   - Realiza commits claros y descriptivos
   - Sincroniza cambios regularmente

5. DOCUMENTACIÓN DEL PROYECTO
   - Crea README.md raíz con:
     * Descripción general del proyecto
     * Estructura de carpetas
     * Stack tecnológico
     * Instrucciones de instalación
     * Cómo ejecutar proyecto localmente
   - Crea FRONTEND.md explicando:
     * Componentes principales
     * Cómo consumir cada endpoint
     * Variables de entorno necesarias (URL_API)

ENTREGABLE: Código React funcional en /frontend, repositorio Git con ramas organizadas, README.md y FRONTEND.md
