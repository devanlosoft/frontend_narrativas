// Footer.js
import React from 'react';


const Footer = () => {
 

  return (
    <footer className="bg-gray-200 py-8 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xl font-bold">Logo Parque Explora</h2>
            {/* Inserta aquí el código para el logo de Parque Explora */}
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">
              Logo Planetario de Medellín
            </h2>
            {/* Inserta aquí el código para el logo del Planetario de Medellín */}
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">
              Logo del Exploratorio Parque Explora
            </h2>
            {/* Inserta aquí el código para el logo del Exploratorio Parque Explora */}
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">Ubicación</h2>
            <p>CARRERA 52 N. 73 - 75</p>
            <p>MEDELLÍN - COLOMBIA</p>
            <p>+57(4) 516 83 00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
