// Footer.js
import React from 'react';


const Footer = () => {
 

  return (
    <footer className="bg-gray-200 py-8 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xl font-bold">Subjetividades</h2>
            {/* Inserta aquí el código para el logo de Parque Explora */}
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">
              Practicas ambientales 
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
            <p>Cra. 6 #77-305</p>
            <p>MONTERÍA - COLOMBIA</p>
            <p> 47860920</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
