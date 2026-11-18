import miFoto from '../assets/img/mi-foto.jpg';

function Acerca() {
  return (
    <main id="contenido-principal">
      <section
        className="hero"
        aria-labelledby="titulo-quien-soy"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${miFoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <h1 id="titulo-quien-soy">Quién soy</h1>
        <p>
          Soy un estudiante de Ingeniería en Informática de la Universidad Católica de Temuco.
        </p>
      </section>

      <section className="features" aria-labelledby="titulo-proyectos-hobbies">
        <h2 id="titulo-proyectos-hobbies">Mis proyectos y hobbies</h2>
        
        <div className="grid">
          <article className="card" aria-labelledby="titulo-hobbies">
            <h3 id="titulo-hobbies">Hobbies y Tecnologías</h3>
            <p>VoleyBall, Ping-Pong, Python, MySQL, AWS y más.</p>
          </article>

          <article className="card" aria-labelledby="titulo-vision">
            <h3 id="titulo-vision">Mi Visión</h3>
            <p>
              Este proyecto está destinado a futuros creadores de contenido o proyectos como pymes.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Acerca;
