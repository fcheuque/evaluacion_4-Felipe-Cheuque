# Registro de Uso de Inteligencia Artificial (`uso_ia.md`)

**Proyecto:** WebCh (Migración de MPA a SPA con React)  
**Fecha:** 18 de noviembre de 2026  
**Herramienta utilizada:** Asistente de IA (LLM)  

---

## 1. Propósito del uso de IA
La Inteligencia Artificial se utilizó como herramienta de apoyo técnico y mentoría durante el proceso de refactorización del proyecto web **WebCh**, pasando de una arquitectura tradicional **MPA (Multi-Page Application)** en HTML estático a una **SPA (Single-Page Application)** moderna desarrollada con **React** y **Vite**.

---

## 2. Áreas de aplicación y tareas asistidas

### A. Arquitectura y configuración del proyecto
* **Planificación de estructura:** Definición de la jerarquía de carpetas dentro de `src/` (`components/`, `pages/`, `assets/`).
* **Enrutamiento del lado del cliente:** Implementación de `react-router-dom` (`BrowserRouter`, `Routes`, `Route` y `NavLink`) para gestionar la navegación sin recargas de página.
* **Diagnóstico de errores:** Revisión de la estructura de archivos en Visual Studio Code para corregir rutas de importación de recursos (`vite.svg`, `hero.png`) y recuperar el punto de entrada `App.jsx`.

### B. Refactorización y modularización de componentes
* **Extracción de elementos comunes:** Separación de la barra de navegación (`Navbar.jsx`) y el pie de página (`Footer.jsx`) para evitar la duplicación de código entre vistas.
* **Conversión de HTML a JSX:** Adaptación del código legado (`index.html`, `contacto.html`) a sintaxis JSX válida (conversión de `class` a `className`, `for` a `htmlFor`, cierre de etiquetas vacías y transformación de estilos en línea a objetos de JavaScript).
* **Gestión de estado:** Implementación del hook `useState` para controlar la interactividad del contador y el manejo de datos en el formulario de contacto.

### C. Accesibilidad Web (WAI-ARIA)
* **Mejoras semánticas en `contacto.jsx`:** Incorporación de atributos WAI-ARIA (`aria-labelledby`, `aria-label`, `aria-required`, `aria-describedby`) para garantizar la compatibilidad con lectores de pantalla.
* **Notificaciones accesibles:** Sustitución de alertas bloqueantes (`alert()`) por una región viva (`role="status"` y `aria-live="polite"`) para anunciar el envío exitoso del formulario.

---

## 3. Validación y supervisión humana
Todo el código sugerido por la IA fue revisado, adaptado e integrado manualmente en el entorno local de desarrollo (Visual Studio Code), verificando:
1. La correcta compilación y ejecución mediante el servidor de desarrollo de Vite (`npm run dev`).
2. La coherencia con los estilos visuales originales del proyecto (`App.css` e `index.css`).
3. El funcionamiento efectivo de la navegación entre rutas y la interactividad de los formularios.
