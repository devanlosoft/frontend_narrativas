import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${scrolled ? 'border-b-2 border-orange-500 bg-white text-black' : 'bg-transparent text-white'}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={96} // Adjust width as needed
            height={96} // Adjust height as needed
            className="h-auto max-h-24 w-auto max-w-full"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes
                className={` text-2xl ${scrolled ? 'border-b-2 bg-white text-black' : 'bg-transparent text-white'}`}
              />
            ) : (
              <FaBars
                className={` text-2xl ${scrolled ? 'border-b-2 bg-white text-black' : 'bg-transparent text-white'}`}
              />
            )}
          </button>
        </div>

        {/* Menú de navegación para dispositivos móviles */}
        <div
          className={`absolute left-0 top-0 h-screen w-full bg-green-500 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          {/* Botón de salida (X) */}
          <div className="flex justify-end px-4 py-2">
            <button onClick={toggleMenu}>
              <FaTimes className="text-2xl text-white" />
            </button>
          </div>
          <ul className="flex h-full flex-col items-center justify-center space-y-4">
            <li>
              <a href="#" className="py-4 text-lg text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="py-4 text-lg text-white">
                Subjetividades
              </a>
            </li>
            <li>
              <a href="#" className="py-4 text-lg text-white">
                Prácticas
              </a>
            </li>
            <li>
              <a href="#" className="py-4 text-lg text-white">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Menú de navegación para pantallas grandes */}
        <div className="hidden items-center md:flex">
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <li className="border-r-2 border-gray-300 pr-4">
              <a
                href="uploadContents"
                className={`px-4 py-2 text-lg font-bold ${scrolled ? 'text-blue-500 hover:text-blue-700' : 'text-white hover:text-gray-300'}`}
              >
                Inicio
              </a>
            </li>
            <li className="border-r-2 border-gray-300 pr-4">
              <a
                href="#"
                className={`px-4 py-2 text-lg font-bold ${scrolled ? 'text-blue-500 hover:text-blue-700' : 'text-white hover:text-gray-300'}`}
              >
                Subjetividades
              </a>
            </li>
            <li className="border-r-2 border-gray-300 pr-4">
              <a
                href="#"
                className={`px-4 py-2 text-lg font-bold ${scrolled ? 'text-blue-500 hover:text-blue-700' : 'text-white hover:text-gray-300'}`}
              >
                Prácticas
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`px-4 py-2 text-lg font-bold ${scrolled ? 'text-blue-500 hover:text-blue-700' : 'text-white hover:text-gray-300'}`}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
