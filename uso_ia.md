# Registro de Uso de Inteligencia Artificial (`uso_ia.md`)

**Proyecto:** WebCh (Migración de MPA a SPA con React)  
**Fecha:** 18 de noviembre de 2026  
**Herramienta utilizada:** Asistente de IA (LLM)  

---

## 1. Propósito del uso de IA
La Inteligencia Artificial se empleó como herramienta de asistencia técnica y mentoría durante la migración del sitio web **WebCh** desde una arquitectura estática **MPA (Multi-Page Application)** hacia una **SPA (Single-Page Application)** desarrollada en **React** y **Vite**, incorporando estándares de accesibilidad, diseño responsivo y consumo de APIs públicas.

---

## 2. Áreas de aplicación y tareas asistidas

### A. Arquitectura SPA y Enrutamiento
* **Estructura modular:** Organización del proyecto en carpetas `components/`, `pages/` y `assets/`.
* **Navegación sin recargas:** Implementación de `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `NavLink`) para gestionar las vistas `/`, `/acerca`, `/contacto` y `/pokedex`.

### B. Refactorización y Diseño Responsivo
* **Conversión HTML a JSX:** Migración de vistas estáticas (`index`, `acerca`, `contacto`) a componentes funcionales de React, adaptando atributos (`className`, `htmlFor`) e importación estática de imágenes (`mi-foto.jpg`).
* **Adaptabilidad multidispositivo:** Limpieza de estilos base de Vite (`index.css`) y creación de reglas CSS con `@media queries` en `App.css` para pantallas de escritorio, tablet (`768px`) y dispositivos móviles (`480px`).

### C. Accesibilidad Web (WAI-ARIA)
* **Formularios e interfaces inclusivas:** Incorporación de atributos `aria-labelledby`, `aria-label`, `aria-required` y `aria-describedby` en `contacto.jsx` y `pokedex.jsx`.
* **Notificaciones no intrusivas:** Implementación de regiones vivas (`role="status"` y `aria-live="polite"`) para anunciar estados de carga y envío de formularios a lectores de pantalla.

### D. Consumo de API Pública (PokeAPI) y Resolución de Red
* **Integración RESTful:** Creación del componente `pokedex.jsx` utilizando `fetch`, `useState` y `useEffect` para consultar datos y filtrarlos en tiempo real.
* **Configuración de Proxy en Vite:** Resolución de errores de red (`Failed to fetch`) y certificados SSL mediante la configuración de un proxy inverso en `vite.config.js` (`/api`).
* **Gestión de recursos locales y respaldo:** Estructuración de imágenes locales en `public/pokemon/` con manejo de errores (`onError`) hacia un servicio de respaldo automático.

---

## 3. Validación y supervisión humana
Todo el código generado fue revisado, probado y ajustado manualmente en **Visual Studio Code**, validando su funcionamiento en el servidor local de Vite (`npm run dev`), la adaptabilidad visual en modo dispositivo del navegador y la correcta navegación entre rutas.
