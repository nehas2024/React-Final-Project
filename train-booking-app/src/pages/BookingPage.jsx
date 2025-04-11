// src/pages/BookingPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BookingPage() {
    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <div className="container mx-auto py-16 text-center">
                <h1 className="text-4xl font-bold mb-8">Book Your Train Tour</h1>
                <p className="text-lg">
                    This is the booking page where users will be able to select and book their train tours.
                    (Content and functionality will be added here)
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default BookingPage;