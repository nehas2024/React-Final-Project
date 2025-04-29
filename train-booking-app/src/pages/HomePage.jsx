import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import Footer
import Header from '../components/Header'; // Import Header

function HomePage() {
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState('');
    const [activity, setActivity] = useState('Any');
    const [destination, setDestination] = useState('Any');
    const [date, setDate] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Example tour data
    const allTours = [
        { id: 1, name: 'Hà Nội City Tour', description: 'Explore the capital city.', activity: 'City Tour', destination: 'Hà Nội', date: '2025-05-10', price: 60 },
        { id: 2, name: 'Đà Nẵng Beach Getaway', description: 'Relax on the beautiful beaches.', activity: 'Beach', destination: 'Đà Nẵng', date: '2025-06-15', price: 50 },
        { id: 3, name: 'Hạ Long Bay Cruise', description: 'Discover the stunning limestone karsts.', activity: 'Cruise', destination: 'Vịnh Hạ Long', date: '2025-07-20', price: 100 },
        { id: 4, name: 'Hà Nội Food Tour', description: 'Taste the delicious street food.', activity: 'Food Tour', destination: 'Hà Nội', date: '2025-08-01', price: 40 },
        { id: 5, name: 'Huế Historical Sites', description: 'Explore the ancient imperial city.', activity: 'Historical', destination: 'Huế', date: '2025-09-12', price: 55 },
        { id: 6, name: 'Sapa Trekking Adventure', description: 'Hike through the rice terraces.', activity: 'Trekking', destination: 'Sapa', date: '2025-10-05', price: 75 },
        { id: 7, name: 'Mekong Delta River Tour', description: 'Experience the floating markets.', activity: 'River Tour', destination: 'Mekong Delta', date: '2025-11-18', price: 90 },
    ];

    const handleViewDetails = (tourName) => {
        navigate(`/tours/${tourName.toLowerCase().replace(/ /g, '-')}`);
    };

    const handleViewAllTours = () => {
        navigate('/tours'); // Corrected route
    };

    const handleSearch = () => {
        console.log('Searching with:', { keywords, activity, destination, date });

        const filteredResults = allTours.filter(tour => {
            const matchesKeywords = keywords ? tour.name.toLowerCase().includes(keywords.toLowerCase()) || tour.description.toLowerCase().includes(keywords.toLowerCase()) : true;
            const matchesActivity = activity === 'Any' || tour.activity === activity;
            const matchesDestination = destination === 'Any' || tour.destination.toLowerCase().includes(destination.toLowerCase());
            const matchesDate = date ? tour.date === date : true;
            return matchesKeywords && matchesActivity && matchesDestination && matchesDate;
        });

        setSearchResults(filteredResults);
    };

    return (
        <div className="bg-gray-900 text-white">
            <Header />

            <section className="relative py-12 mt-16 text-white text-center bg-[url('/images/train-1.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto relative z-10">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Van Lang Tour</h1>
                    <p className="text-xl text-gray-300 mb-6">Discover amazing train tours.</p>
                    <Link to="/tours" className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600">Explore Tours</Link>
                </div>
            </section>

            <section className="py-8 bg-black bg-opacity-75">
                <div className="container mx-auto flex justify-center gap-4">
                    <div className="flex items-center bg-white rounded-md">
                        <input type="text" placeholder="Keywords" className="py-2 px-4 rounded-l-md text-black" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div className="flex items-center bg-white rounded-md">
                        <select className="py-2 px-4 rounded-md text-black" value={activity} onChange={(e) => setActivity(e.target.value)}>
                            <option>Any</option>
                            <option>City Tour</option>
                            <option>Beach</option>
                            <option>Cruise</option>
                            <option>Food Tour</option>
                            <option>Historical</option>
                            <option>Trekking</option>
                            <option>River Tour</option>
                            {/* Add activity options here */}
                        </select>
                    </div>
                    <div className="flex items-center bg-white rounded-md">
                        <select className="py-2 px-4 rounded-md text-black" value={destination} onChange={(e) => setDestination(e.target.value)}>
                            <option>Any</option>
                            <option>Hà Nội</option>
                            <option>Đà Nẵng</option>
                            <option>Vịnh Hạ Long</option>
                            <option>Huế</option>
                            <option>Sapa</option>
                            <option>Mekong Delta</option>
                            {/* Add destination options here */}
                        </select>
                    </div>
                    <div className="flex items-center bg-white rounded-md">
                        <input type="date" className="py-2 px-4 rounded-md text-black" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <button onClick={handleSearch} className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600">Search</button>
                </div>
            </section>

            {searchResults.length > 0 && (
                <section className="py-8 bg-black bg-opacity-75">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-8 text-yellow-500">Search Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {searchResults.map(tour => (
                                <div key={tour.id} className="bg-black bg-opacity-60 rounded-lg shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-xl mb-2 text-white">{tour.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{tour.description}</p>
                                        <p className="text-yellow-500 font-semibold">Destination: {tour.destination}</p>
                                        <p className="text-yellow-500 font-semibold">Activity: {tour.activity}</p>
                                        {tour.date && <p className="text-yellow-500 font-semibold">Date: {tour.date}</p>}
                                        <p className="text-yellow-500 font-semibold">Price: ${tour.price}</p>
                                        <button onClick={() => handleViewDetails(tour.name)} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 mt-4">View Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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