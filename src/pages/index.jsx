import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Estructura limpia, rápida y optimizada para SEO sin etiquetas basura.</p>
        <Link to="/contacto" className="btn">Saber más</Link>
      </section>

      <section className="grid-features">
        <article>
          <h3>Semántica Pura</h3>
          <p>Menos código, mayor legibilidad y mejor rendimiento de carga.</p>
        </article>
        <article>
          <h3>Accesibilidad</h3>
          <p>Los lectores de pantalla entienden perfectamente tu contenido.</p>
        </article>
        <article>
          <h3>Estilos Modernos</h3>
          <p>Hecho con CSS Grid y Flexbox.</p>
        </article>
      </section>
    </main>
  );
}

export default Home;
