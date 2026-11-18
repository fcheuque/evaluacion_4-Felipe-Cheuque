import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/index';    
import Acerca from './pages/acerca'; 
import Contacto from './pages/contacto'
import Pokedex from './pages/pokedex';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
