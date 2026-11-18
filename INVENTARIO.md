# Inventario del Proyecto (`INVENTARIO.md`)

**Nombre del Proyecto:** WebCh  
**Tipo de Arquitectura:** SPA (Single-Page Application)  
**Stack Tecnológico:** React, Vite, React Router DOM, CSS3 (Responsivo), PokeAPI  

---

## 1. Estructura de Directorios y Archivos

### Raíz del Proyecto (`/Frontend`)
* **`index.html`**: Documento HTML único que sirve como punto de montaje (`<div id="root">`) para toda la aplicación SPA.
* **`package.json`**: Manifiesto del proyecto con los scripts de ejecución (`dev`, `build`) y dependencias (`react`, `react-dom`, `react-router-dom`).
* **`package-lock.json`**: Registro exacto de las versiones del árbol de dependencias.
* **`vite.config.js`**: Configuración del servidor Vite, incluyendo el **proxy inverso (`/api`)** para consumir PokeAPI sin bloqueos de red ni CORS.
* **`eslint.config.js`**: Reglas de análisis estático para mantener la estandarización del código JSX.
* **`README.md`**: Documentación general e instrucciones de instalación.
* **`INVENTARIO.md`**: Catálogo detallado de archivos, componentes, rutas y recursos del sistema.
* **`uso_ia.md`**: Registro transparente sobre el uso de herramientas de Inteligencia Artificial durante el desarrollo.

### Código Fuente (`/src`)
* **`main.jsx`**: Punto de entrada que renderiza el componente raíz `<App />` en el DOM.
* **`App.jsx`**: Componente principal que configura el enrutador (`BrowserRouter`) y envuelve las vistas con el `<Navbar />` y `<Footer />`.
* **`index.css`**: Reseteo CSS global y configuración base de pantalla completa para `#root`.
* **`App.css`**: Hoja de estilos principal con diseño responsivo (`@media queries`) adaptado a **escritorio, tablet (768px) y celular (480px)**.

### Componentes Reutilizables (`/src/components`)
* **`Navbar.jsx`**: Barra de navegación persistente con enlaces dinámicos (`NavLink`) y soporte responsivo.
* **`Footer.jsx`**: Pie de página persistente con información de derechos de autor.

### Vistas / Páginas (`/src/pages`)
* **`index.jsx` (Inicio)**: Vista principal con sección hero y grilla de características.
* **`acerca.jsx` (Acerca de mí)**: Vista biográfica con imagen de fondo importada como módulo y tarjetas de hobbies/visión.
* **`contacto.jsx` (Contacto)**: Formulario interactivo controlado por estado (`useState`) con atributos de accesibilidad **WAI-ARIA** (`aria-live`, `aria-required`, `aria-describedby`).
* **`pokedex.jsx` (Pokédex API)**: Vista dinámica que consume la API pública **PokeAPI** mediante `fetch` y `useEffect`, con buscador en tiempo real y respaldo de imágenes (`onError`).

### Recursos Estáticos (`/src/assets` y `/public`)
* **`src/assets/img/mi-foto.jpg`**: Fotografía personal utilizada en el banner de la sección "Acerca de mí".
* **`src/assets/hero.png`, `react.svg`, `vite.svg`**: Recursos gráficos base del proyecto.
* **`public/pokemon/`**: Carpeta pública con las ilustraciones locales (`1.png` a `12.png`) vinculadas a los registros de la Pokédex.

---

## 2. Mapa de Rutas (React Router)

| Ruta URL | Componente Renderizado | Archivo Origen | Descripción |
| :--- | :--- | :--- | :--- |
| `/` | `<Home />` | `src/pages/index.jsx` | Página de aterrizaje principal. |
| `/acerca` | `<Acerca />` | `src/pages/acerca.jsx` | Sección biográfica y perfil profesional. |
| `/contacto` | `<Contacto />` | `src/pages/contacto.jsx` | Formulario de contacto accesible (WAI-ARIA). |
| `/pokedex` | `<Pokedex />` | `src/pages/pokedex.jsx` | Consumo de PokeAPI con filtro de búsqueda. |

---

## 3. Integraciones Externas
* **PokeAPI (`https://pokeapi.co`)**: API RESTful pública consumida a través del proxy local `/api` configurado en Vite.
