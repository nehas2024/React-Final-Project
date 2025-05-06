// src/pages/TourDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TourDetailsPage() {
    const { tourName } = useParams();
    const [tourDetails, setTourDetails] = useState(null);

    useEffect(() => {
        // Function to fetch tour details based on the tourName
        const fetchTourDetails = async (name) => {
            // Replace this with your actual data fetching logic (e.g., API call)
            // Example local data lookup:
            const allTours = [
                { id: 1, name: 'Hà Nội City Tour', description: 'Detailed description of Hanoi City Tour...', price: 60, imageUrl: '/images/hanoi.jpg' },
                { id: 2, name: 'Đà Nẵng Beach Getaway', description: 'All about the Da Nang beach tour...', price: 50, imageUrl: '/images/danang.jpg' },
                // ... more tours
            ];
            const foundTour = allTours.find(tour => tour.name.toLowerCase().replace(/ /g, '-') === name);

            if (foundTour) {
                setTourDetails(foundTour);
            } else {
                // Handle case where tour is not found (e.g., redirect to a 404 page)
                console.log(`Tour "${name}" not found.`);
                setTourDetails(null);
            }

            // If fetching from an API:
            // try {
            //     const response = await fetch(`/api/tours/${name}`);
            //     const data = await response.json();
            //     setTourDetails(data);
            // } catch (error) {
            //     console.error('Error fetching tour details:', error);
            //     setTourDetails(null);
            // }
        };

        fetchTourDetails(tourName);
    }, [tourName]);

    if (!tourDetails) {
        return <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">Loading tour details...</div>;
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-8 lg:px-16 py-10 mt-16">
                <h1 className="text-3xl font-bold mb-6 text-yellow-500">{tourDetails.name}</h1>
                {tourDetails.imageUrl && <img src={tourDetails.imageUrl} alt={tourDetails.name} className="w-full rounded-lg mb-4" />}
                <p className="text-gray-300 leading-relaxed mb-6">{tourDetails.description}</p>
                <p className="text-yellow-500 font-semibold text-lg">Price: ${tourDetails.price}</p>
                {/* Add more details here */}
            </main>
            <Footer />
        </div>
    );
}

export default TourDetailsPage;