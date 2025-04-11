// src/pages/AboutUsPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutUsPage() {
    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <div className="container mx-auto py-16 text-center">
                <h1 className="text-4xl font-bold mb-8">About Van Lang Tour</h1>
                <p className="text-lg mb-4">
                    Welcome to Van Lang Tour! We are passionate about providing you with unforgettable train journey experiences across beautiful landscapes.
                </p>
                <p className="text-lg mb-4">
                    Our mission is to make train travel easy, convenient, and enjoyable for everyone. We offer a wide range of tour packages to suit different interests and budgets.
                </p>
                <p className="text-lg">
                    Whether you're looking for a relaxing getaway, an adventurous exploration, or a cultural immersion, Van Lang Tour is your trusted partner.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;