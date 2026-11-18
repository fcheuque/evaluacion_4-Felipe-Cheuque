import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <NavLink to="/">WebCh</NavLink>
      </div>
      <nav aria-label="Navegación principal">
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/acerca">Acerca de mi</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
