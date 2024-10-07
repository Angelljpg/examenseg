import React from 'react';
import { Link } from 'react-router-dom';
import Carrusel from '../components/Carrusel';
import seguridadImg from '../assets/KM3D.png'; // Asegúrate de que la ruta de la imagen sea correcta

const SeguridadInfo = () => {
  return (
    <div className="container" style={{ marginTop: '150px' }}> {/* Ajustar el margen superior */}
      <h1 className="text-start" style={{ marginLeft: '80px', fontWeight: 'bold' }}>Seguridad de la Información</h1>
      <div className="row mt-4 align-items-center">
        <div className="col-md-6">
          <img 
            src={seguridadImg} 
            alt="Seguridad de la Información" 
            className="img-fluid rounded shadow" 
            style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
          />
        </div>
        <div className="col-md-6">
          <p style={{ textAlign: 'justify', lineHeight: '1.7', fontSize: '1.1rem', color: '#34495E' }}>
            La <strong>seguridad de la información</strong> se refiere al conjunto de principios, procesos y medidas
            implementadas para proteger la <strong>confidencialidad</strong>, <strong>integridad</strong> y <strong>disponibilidad</strong> de la información. 
            Esto implica la protección de datos contra accesos no autorizados, modificaciones indebidas, destrucción o la interrupción en su uso.
            Las medidas de seguridad abarcan tanto soluciones tecnológicas, como el uso de <strong>cifrado</strong> y <strong>firewalls</strong>, como también factores humanos,
            como la formación y concienciación de usuarios en torno a buenas prácticas de seguridad. En el contexto digital actual, donde
            los riesgos cibernéticos son crecientes y complejos, la seguridad de la información resulta esencial para la protección de datos personales y corporativos.
          </p>
          {/* Botón centralizado con un estilo formal */}
          <div className="text-center mt-4">
            <Link to="/detalle-seguridad" className="btn btn-outline-primary btn-lg">
              Leer más sobre Seguridad
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Carrusel />
      </div>
      <footer className="text-center mt-5">
        <p>&copy; 2024 Seguridad de la Información</p>
        <p>&copy; 2024 Herrera Sánchez Ángel Axel</p>
      </footer>
    </div>
  );
};

export default SeguridadInfo;
