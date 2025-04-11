// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-black bg-opacity-75 shadow py-4 px-6 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="font-bold text-xl text-yellow-500">Van Lang Tour</Link>
                <nav className="flex items-center">
                    <Link to="/" className="text-gray-300 hover:text-white mr-4">Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white mr-4">About us</Link>
                    <Link to="/booking" className="text-gray-300 hover:text-white mr-4">Booking</Link>
                    <Link to="/login" className="text-gray-300 hover:text-white mr-4">Login</Link>
                    <Link to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;