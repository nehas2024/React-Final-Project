// src/pages/HomePage.jsx
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const handleViewDetails = (tourName)=> {
        navigate(`/tours/${tourName.toLowerCase().replace(/ /g, '-')}`); // Example navigation
    };

    const handleViewAllTours = () => {
        navigate('/all-tours'); // Replace '/all-tours' with your actual route
    };

    return (
        <div className="bg-gray-900 text-white">
            <Header />

            {/* Add mt-16 to create space below the fixed header */}
            <section className="relative py-12 mt-16 text-white text-center bg-[url('/images/train-1.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto relative z-10">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Van Lang Tour</h1>
                    <p className="text-xl text-gray-300 mb-6">Discover amazing train tours.</p>
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600">Explore Tours</button>
                </div>
            </section>

            <section className="py-8 bg-black bg-opacity-75">
                <div className="container mx-auto flex justify-center gap-4">
                    <div className="flex items-center bg-white rounded-md">
                        <input type="text" placeholder="Keywords" className="py-2 px-4 rounded-l-md text-black" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div className="flex items-center bg-white rounded-md">
                        <select className="py-2 px-4 rounded-md text-black">
                            <option>Any</option>
                            {/* Add activity options here */}
                        </select>
                    </div>
                    <div className="flex items-center bg-white rounded-md">
                        <select className="py-2 px-4 rounded-md text-black">
                            <option>Any</option>
                            {/* Add destination options here */}
                        </select>
                    </div>
                    <div className="flex items-center bg-white rounded-md">
                        <input type="date" className="py-2 px-4 rounded-md text-black" />
                    </div>
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600">Search</button>
                </div>
            </section>

            <section className="py-8 bg-[url('/images/Bridge-1.png')] bg-cover bg-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8 text-yellow-500">Popular Tour Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-black bg-opacity-60 rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h3 className="font-semibold text-xl mb-2 text-white">Hà Nội</h3>
                                <p className="text-gray-400 text-sm mb-4">Sài Gòn - Hà Nội</p>
                                <p className="text-yellow-500 font-semibold">From $60</p>
                                <button onClick={() => handleViewDetails('Hà Nội')} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 mt-4">View Details</button>
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-60 rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h3 className="font-semibold text-xl mb-2 text-white">Đà Nẵng</h3>
                                <p className="text-gray-400 text-sm mb-4">Hà Nội - Đà Nẵng</p>
                                <p className="text-yellow-500 font-semibold">From $50</p>
                                <button onClick={() => handleViewDetails('Đà Nẵng')} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 mt-4">View Details</button>
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-60 rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h3 className="font-semibold text-xl mb-2 text-white">Vịnh Hạ Long</h3>
                                <p className="text-gray-400 text-sm mb-4">Bắc Ninh - Hạ Long</p>
                                <p className="text-yellow-500 font-semibold">From $10</p>
                                <button onClick={() => handleViewDetails('Vịnh Hạ Long')} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 mt-4">View Details</button>
                            </div>
                        </div>
                        {/* Add more popular tour packages here */}
                    </div>
                    <button onClick={handleViewAllTours} className="mt-12 bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600">View All Tour</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default HomePage;