// Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-lg font-semibold">
          Desarrollado por el grupo de investigación{' '}
          <span className="font-bold text-yellow-400">BIMADINO</span>
        </p>
        <a
          href="https://www.unicordoba.edu.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 transition-colors duration-300 hover:text-blue-600 hover:underline hover:shadow-lg"
        >
          www.unicordoba.co
        </a>
      </div>
    </footer>
  );
};

export default Footer;
