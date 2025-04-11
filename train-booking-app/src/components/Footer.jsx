// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="container mx-auto text-center">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white">WE ARE VERY HAPPY</h3>
                    <h3 className="text-lg font-semibold text-white">THAT YOU CHOOSE US</h3>
                    <p className="text-sm mt-2">Thank you for trusting us for choosing amazing train journeys and travel experiences. We are always here for your convenience.</p>
                </div>
                <nav className="flex justify-center space-x-8 mb-6">
                    <div>
                        <h6 className="text-white font-semibold mb-2">home</h6>
                        <Link to="/about" className="block hover:text-yellow-500 text-sm">about us</Link>
                        <Link to="/booking" className="block hover:text-yellow-500 text-sm">booking</Link>
                    </div>
                    <div>
                        <h6 className="text-white font-semibold mb-2">contact us</h6>
                        <p className="text-sm">0703169545</p>
                        <p className="text-sm">contact@vanlang.tour</p>
                    </div>
                    <div>
                        <h6 className="text-white font-semibold mb-2">follow us</h6>
                        <a href="https://facebook.com" className="block hover:text-yellow-500 text-sm">facebook</a> {/* Replace with your actual link */}
                        <a href="https://instagram.com" className="block hover:text-yellow-500 text-sm">instagram</a> {/* Replace with your actual link */}
                    </div>
                </nav>
                <p className="text-xs">&copy; 2025 Van Lang Tour. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;