// src/pages/BookingPage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function BookingPage() {
    const [keywords, setKeywords] = useState('');
    const [activity, setActivity] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [searchResults, setSearchResults] = useState([
        { id: 1, departureTime: '12:00', origin: 'Sài Gòn', arrivalTime: '19:00', destination: 'Hà Nội', price: '1,200,000 VND' },
        { id: 2, departureTime: '08:00', origin: 'Huế', arrivalTime: '11:30', destination: 'Đà Nẵng', price: '550,000 VND' },
        // Add more search result objects here
    ]);

    const handleSearch = () => {
        console.log('Searching with:', { keywords, activity, destination, date });
        // Implement your actual search logic here
    };

    useEffect(() => {
        console.log('Current window.location.pathname:', window.location.pathname);
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            {/* Fixed Background */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center" style={{ backgroundImage: `url(\${import.meta.env.BASE_URL}images/train-station.jpg)` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            <Header className="z-20" />

            <main className="flex-grow container mx-auto px-4 md:px-8 lg:px-16 py-10 z-10 relative mt-16 md:mt-16 lg:mt-16">
                {/* Search Bar */}
                <section className="bg-white text-black rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Find Your Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label htmlFor="keywords" className="block text-sm font-bold mb-2">Keywords</label>
                            <input type="text" id="keywords" className="w-full p-3 border rounded" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="activity" className="block text-sm font-bold mb-2">Activity</label>
                            <select id="activity" className="w-full p-3 border rounded" value={activity} onChange={(e) => setActivity(e.target.value)}>
                                <option value="">Any</option>
                                <option value="train">Train Journey</option>
                                {/* Add more activity options */}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="destination" className="block text-sm font-bold mb-2">Destination</label>
                            <input type="text" id="destination" className="w-full p-3 border rounded" value={destination} onChange={(e) => setDestination(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-bold mb-2">Date</label>
                            <input type="date" id="date" className="w-full p-3 border rounded" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={handleSearch} className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-600 mt-4">
                        Search
                    </button>
                </section>

                {/* Search Results */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Available Journeys</h2>
                    {searchResults.map(journey => (
                        <div key={journey.id} className="bg-black bg-opacity-75 rounded-lg shadow-md p-6 mb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center">
                            <div>
                                <h3 className="font-semibold text-lg">{journey.departureTime}</h3>
                                <p className="text-sm text-gray-300">{journey.origin}</p>
                            </div>
                            <div className="text-center">
                                <svg className="w-6 h-6 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{journey.arrivalTime}</h3>
                                <p className="text-sm text-gray-300">{journey.destination}</p>
                            </div>
                            <div className="text-right md:text-left">
                                <p className="font-semibold">{journey.price}</p>
                            </div>
                            <div className="text-right">
                                <Link to="/booking/details" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-300">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                    {searchResults.length === 0 && <p className="text-gray-400">No journeys found based on your search.</p>}
                </section>

                {/* Potentially other sections */}
            </main>
            <Footer className="z-20" />
        </div>
    );
}

export default BookingPage;