import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ToursPage() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate fetching tours from an API
        const fetchTours = async () => {
            try {
                // Replace this with your actual API call
                // const response = await fetch('/api/tours');
                // if (!response.ok) {
                //   throw new Error('Failed to fetch tours');
                // }
                // const data = await response.json();
                // setTours(data);

                // Simulate API data for now
                const mockData = [
                    { id: 1, name: 'Hà Nội City Tour', description: 'Explore the capital city.', activity: 'City Tour', destination: 'Hà Nội', date: '2025-05-10', price: 60 },
                    { id: 2, name: 'Đà Nẵng Beach Getaway', description: 'Relax on the beautiful beaches.', activity: 'Beach', destination: 'Đà Nẵng', date: '2025-06-15', price: 50 },
                    { id: 3, name: 'Hạ Long Bay Cruise', description: 'Discover the stunning limestone karsts.', activity: 'Cruise', destination: 'Vịnh Hạ Long', date: '2025-07-20', price: 100 },
                    { id: 4, name: 'Hà Nội Food Tour', description: 'Taste the delicious street food.', activity: 'Food Tour', destination: 'Hà Nội', date: '2025-08-01', price: 40 },
                    { id: 5, name: 'Huế Historical Sites', description: 'Explore the ancient imperial city.', activity: 'Historical', destination: 'Huế', date: '2025-09-12', price: 55 },
                    { id: 6, name: 'Sapa Trekking Adventure', description: 'Hike through the rice terraces.', activity: 'Trekking', destination: 'Sapa', date: '2025-10-05', price: 75 },
                    { id: 7, name: 'Mekong Delta River Tour', description: 'Experience the floating markets.', activity: 'River Tour', destination: 'Mekong Delta', date: '2025-11-18', price: 90 },
                ];

                setTours(mockData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return (
            <div className="bg-gray-900 text-white py-20">
                <div className="container mx-auto text-center">Loading tours...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-900 text-white py-20">
                <div className="container mx-auto text-center text-red-500">
                    Error: {error.message}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-8 text-center text-yellow-500">
                    All Tours
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="bg-black bg-opacity-60 rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="font-semibold text-xl mb-2 text-white">
                                    {tour.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {tour.description}
                                </p>
                                <p className="text-yellow-500 font-semibold">
                                    Destination: {tour.destination}
                                </p>
                                <p className="text-yellow-500 font-semibold">
                                    Activity: {tour.activity}
                                </p>
                                {tour.date && (
                                    <p className="text-yellow-500 font-semibold">
                                        Date: {tour.date}
                                    </p>
                                )}
                                <p className="text-yellow-500 font-semibold">
                                    Price: ${tour.price}
                                </p>
                                <Link
                                    to={`/tours/${tour.name.toLowerCase().replace(/ /g, '-')}`}
                                    className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 mt-4 block text-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ToursPage;