import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center"> {/* Adjusted for alignment */}
                    {/* Website Logo */}
                    <Link to="http://journova.org" className="flex items-center py-4 px-2">
                        <span className="text-3xl text-white font-anton">Journova</span>
                    </Link>

                    {/* Spacer */}
                    <div className="flex-grow"></div> {/* Added for spacing */}

                    {/* Primary Navbar items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to='http://journova.org' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">Home</Link>
                        <Link to='/' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">Create</Link>
                        <Link to='/pricing' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">Pricing</Link>
                        <Link to='/about' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">About</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button type="button" className="outline-none mobile-menu-button text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden bg-black ${isMenuOpen ? 'block' : 'hidden'}`}>
                <Link to='http://journova.org' onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-sm text-white hover:bg-gray-500">Home</Link>
                <Link to='/' onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-sm text-white hover:bg-gray-500">Create</Link>
                <Link to='/pricing' onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-white text-sm hover:bg-gray-500">Pricing</Link>
                <Link to='/about' onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-white text-sm hover:bg-gray-500">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
