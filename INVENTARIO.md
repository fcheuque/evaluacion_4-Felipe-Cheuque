# Inventario del Proyecto (`INVENTARIO.md`)

**Nombre del Proyecto:** WebCh  
**Tipo de Arquitectura:** SPA (Single-Page Application)  
**Stack Tecnológico:** React, Vite, React Router DOM, CSS3  

---

## 1. Estructura de Directorios y Archivos

### Raíz del Proyecto (`/Frontend`)
* **`index.html`**: Documento HTML único que sirve como punto de montaje (`<div id="root">`) para toda la aplicación SPA.
* **`package.json`**: Manifiesto del proyecto que contiene los scripts de ejecución (`dev`, `build`) y las dependencias instaladas (`react`, `react-dom`, `react-router-dom`).
* **`package-lock.json`**: Registro exacto de las versiones del árbol de dependencias para garantizar instalaciones consistentes.
* **`vite.config.js`**: Archivo de configuración del empaquetador y servidor de desarrollo Vite.
* **`eslint.config.js`**: Reglas de análisis estático (linter) para mantener la calidad y estandarización del código JavaScript/JSX.
* **`README.md`**: Documentación general e instrucciones de instalación y ejecución del proyecto.
* **`INVENTARIO.md`**: Catálogo detallado de los archivos, componentes y recursos del sistema.
* **`uso_ia.md`**: Registro transparente sobre el uso de herramientas de Inteligencia Artificial durante el desarrollo.

### Código Fuente (`/src`)
* **`main.jsx`**: Punto de entrada de JavaScript que renderiza el componente raíz `<App />` dentro del DOM.
* **`App.jsx`**: Componente contenedor principal que configura el enrutador (`BrowserRouter`) y define la estructura global (`Navbar`, `Routes`, `Footer`).
* **`index.css`**: Hoja de estilos globales base aplicados a todo el documento.
* **`App.css`**: Hoja de estilos específica para los componentes principales, grillas y diseño de la aplicación.

### Componentes Reutilizables (`/src/components`)
* **`Navbar.jsx`**: Barra de navegación superior persistente con enlaces dinámicos (`NavLink`), logotipos y contador interactivo de estado.
* **`Footer.jsx`**: Pie de página persistente con información de derechos de autor.

### Vistas / Páginas (`/src/pages`)
* **`index.jsx` (Inicio)**: Vista principal con sección hero de bienvenida y grilla de características del sitio.
* **`acerca.jsx` (Acerca de mí)**: Vista informativa sobre el proyecto o perfil del desarrollador.
* **`contacto.jsx` (Contacto)**: Vista con formulario interactivo controlado por estado (`useState`) y atributos de accesibilidad **WAI-ARIA** (`aria-live`, `aria-required`, `aria-describedby`).

### Recursos Estáticos (`/src/assets` y `/public`)
* **`src/assets/hero.png`**: Imagen principal utilizada en la cabecera.
* **`src/assets/react.svg`**: Logotipo vectorial de la librería React.
* **`src/assets/vite.svg`**: Logotipo vectorial del entorno Vite.
* **`public/`**: Carpeta destinada a archivos estáticos públicos servidos directamente desde la raíz.

---

## 2. Mapa de Rutas (React Router)

| Ruta URL | Componente Renderizado | Archivo Origen | Descripción |
| :--- | :--- | :--- | :--- |
| `/` | `<Home />` | `src/pages/index.jsx` | Página de aterrizaje principal. |
| `/acerca` | `<Acerca />` | `src/pages/acerca.jsx` | Sección biográfica o corporativa. |
| `/contacto` | `<Contacto />` | `src/pages/contacto.jsx` | Formulario de contacto accesible. |

---

## 3. Dependencias Principales

* **`react` & `react-dom`**: Librerías base para la construcción de interfaces de usuario basadas en componentes.
* **`react-router-dom`**: Gestión de navegación del lado del cliente (Client-Side Routing) sin recarga de página.
* **`vite`**: Herramienta de compilación rápida y servidor de desarrollo local.
