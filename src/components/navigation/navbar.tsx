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
                    <Link to="/" className="flex items-center py-4 px-2">
                        <span className="text-3xl text-white font-anton">Journova</span>
                    </Link>

                    {/* Spacer */}
                    <div className="flex-grow"></div> {/* Added for spacing */}

                    {/* Primary Navbar items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to='/' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">Create</Link>
                        <Link to='/' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">Examples</Link>
                        <Link to='/' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">Pricing</Link>
                        <Link to='/about' className="py-4 text-white px-2 hover:text-slate-300 transition duration-300">About</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button type="button" className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <Link to='/' className="block py-2 px-4 text-sm hover:bg-gray-200">Create</Link>
                <Link to='/' className="block py-2 px-4 text-sm hover:bg-gray-200">Examples</Link>
                <Link to='/' className="block py-2 px-4 text-sm hover:bg-gray-200">Profile</Link>
                <Link to='/' className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</Link>
            </div>
        </nav>
    );
};

export default Navbar;
