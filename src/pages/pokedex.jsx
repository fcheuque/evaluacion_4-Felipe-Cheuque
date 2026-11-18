import { useState, useEffect } from 'react';

function Pokedex() {
  const [pokemones, setPokemones] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPokemones = async () => {
      try {
        // Consume la API a través del proxy configurado en vite.config.js
        const respuesta = await fetch('/api/v2/pokemon?limit=12');
        if (!respuesta.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        
        const data = await respuesta.json();

        // Asigna el ID y apunta a la ruta local en public/pokemon/
        const listaFormateada = data.results.map((pokemon, index) => {
          const id = index + 1;
          return {
            id,
            name: pokemon.name,
            imagen: `/pokemon/${id}.png`
          };
        });

        setPokemones(listaFormateada);
      } catch (err) {
        setError(`No se pudo conectar (${err.message}). Revisa tu conexión o el proxy.`);
      } finally {
        setCargando(false);
      }
    };

    obtenerPokemones();
  }, []);

  // Filtra los Pokémon según el texto ingresado en el buscador
  const pokemonesFiltrados = pokemones.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main id="contenido-principal">
      <section className="hero" aria-labelledby="titulo-pokedex">
        <h1 id="titulo-pokedex">Pokédex API</h1>
        <p>Consumo de API pública RESTful con React, Fetch y estado dinámico.</p>
      </section>

      <section className="features" aria-label="Listado de Pokémon">
        {/* Buscador accesible */}
        <div style={{ maxWidth: '400px', margin: '0 auto 2rem' }}>
          <label 
            htmlFor="buscar-pokemon" 
            style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}
          >
            Filtrar Pokémon por nombre:
          </label>
          <input
            id="buscar-pokemon"
            type="text"
            placeholder="Ej: pikachu, bulbasaur..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        {/* Estado de carga */}
        {cargando && (
          <p role="status" aria-live="polite" style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            Cargando Pokémon desde PokeAPI...
          </p>
        )}

        {/* Estado de error */}
        {error && (
          <p role="alert" style={{ textAlign: 'center', color: 'red' }}>
            Error: {error}
          </p>
        )}

        {/* Grilla de tarjetas */}
        {!cargando && !error && (
          <div className="grid">
            {pokemonesFiltrados.map((poke) => (
              <article key={poke.id} className="card" style={{ textAlign: 'center' }}>
                <span style={{ color: '#6b7280', fontWeight: 'bold' }}>#{poke.id}</span>
                
                <img
                  src={poke.imagen}
                  alt={`Ilustración oficial de ${poke.name}`}
                  width="140"
                  height="140"
                  style={{ display: 'block', margin: '0.5rem auto', objectFit: 'contain' }}
                  loading="lazy"
                  onError={(e) => {
                    // Si aún no guardas la imagen local, muestra un respaldo automático
                    e.target.onerror = null;
                    e.target.src = `https://dicebear.com{poke.name}`;
                  }}
                />

                <h3 style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>
                  {poke.name}
                </h3>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Pokedex;
