import { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [estadoEnvio, setEstadoEnvio] = useState({
    enviado: false,
    texto: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstadoEnvio({
      enviado: true,
      texto: `¡Gracias ${formData.nombre}! Tu mensaje ha sido enviado correctamente.`
    });
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <main id="contenido-principal">
      <section 
        className="hero" 
        aria-labelledby="titulo-contacto"
        style={{ background: 'linear-gradient(135deg, #0070f3 0%, #054f5e 100%)' }}
      >
        <h1 id="titulo-contacto">Contáctanos</h1>
        <p id="descripcion-contacto">
          ¿Tienes dudas o algún proyecto en mente? Escríbenos y te responderemos lo antes posible.
        </p>
      </section>

      <section 
        className="features" 
        aria-label="Formulario de contacto"
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <div className="card">
          {estadoEnvio.enviado && (
            <div
              role="status"
              aria-live="polite"
              style={{
                padding: '1rem',
                marginBottom: '1.5rem',
                backgroundColor: '#d4edda',
                color: '#155724',
                border: '1px solid #c3e6cb',
                borderRadius: '5px'
              }}
            >
              {estadoEnvio.texto}
            </div>
          )}

          <form 
            onSubmit={handleSubmit} 
            className="contact-form"
            aria-describedby="descripcion-contacto"
          >
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="nombre" 
                style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}
              >
                Nombre <span aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="name"
                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px' }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="correo" 
                style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}
              >
                Correo Electrónico <span aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="ayuda-correo"
                autoComplete="email"
                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px' }}
              />
              <small id="ayuda-correo" style={{ display: 'block', marginTop: '0.3rem', color: '#555' }}>
                Ejemplo: usuario@dominio.com
              </small>
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="mensaje" 
                style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}
              >
                Mensaje <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                aria-required="true"
                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px', resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="btn"
              aria-label="Enviar formulario de contacto"
              style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', width: '100%', cursor: 'pointer' }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
