import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white text-black border-b-2 border-orange-500' : 'bg-transparent text-white'}`}>
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center">
                    <h1 className="text-lg font-semibold">Logo</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <FaTimes className={` text-2xl ${scrolled ? 'bg-white text-black border-b-2' : 'bg-transparent text-white'}`} />
                        ) : (
                            <FaBars className={` text-2xl ${scrolled ? 'bg-white text-black border-b-2' : 'bg-transparent text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Menú de navegación para dispositivos móviles */}
                <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-green-500 ${isOpen ? 'block' : 'hidden'}`}>
                 {/* Botón de salida (X) */}
                    <div className="flex justify-end px-4 py-2">
                        <button onClick={toggleMenu}>
                            <FaTimes className="text-white text-2xl" />
                        </button>
                    </div>
                    <ul className="flex flex-col items-center justify-center h-full">
                        <li><a href="#" className="text-white text-lg py-4">Inicio</a></li>
                        <li><a href="#" className="text-white text-lg py-4">Subjetividades</a></li>
                        <li><a href="#" className="text-white text-lg py-4">Prácticas</a></li>
                        <li><a href="#" className="text-white text-lg py-4">Login</a></li>
                    </ul>
                </div>

                {/* Menú de navegación para pantallas grandes */}
                <div className="md:flex items-center hidden">
                    <ul className="flex flex-col md:flex-row md:space-x-4 md:items-center">
                        <li><a href="#" className="">Inicio</a></li>
                        <li><a href="#" className="">Subjetividades</a></li>
                        <li><a href="#" className="">Prácticas</a></li>
                        <li><a href="#" className="">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
