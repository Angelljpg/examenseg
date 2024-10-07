import React, { useEffect, useState } from 'react';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation
import '../css/NavBar.css'; // Asegúrate de importar el archivo CSS

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation(); // Hook para obtener la ruta actual

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Desplazándose hacia abajo
        setVisible(false);
      } else {
        // Desplazándose hacia arriba
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container d-flex justify-content-between align-items-center p-3 bg-light fixed-top shadow-sm ${visible ? 'show' : 'hide'}`}>
      <div className="left d-flex align-items-center">
        
        <FaExclamationTriangle className="icon-alert mx-2" />
        <span className="navbar-title">ALUMNO: Herrera Sanchez Angel Axel</span>
      </div>
      <div className="right d-flex align-items-center">
        <Link
          to="/seccion1"
          className={`btn btn-custom mx-2 ${location.pathname === '/seccion1' ? 'active' : ''}`}
        >
          Sección 1
        </Link>
        <Link
          to="/seccion2"
          className={`btn btn-custom mx-2 ${location.pathname === '/seccion2' ? 'active' : ''}`}
        >
          Sección 2
        </Link>
        <Link
          to="/seccion3"
          className={`btn btn-custom mx-2 ${location.pathname === '/seccion3' ? 'active' : ''}`}
        >
          Sección 3
        </Link>
        <Link
          to="/"
          className={`btn btn-home mx-2 ${location.pathname === '/' ? 'active' : ''}`}
        >
          <FaHome className="icon-home" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
