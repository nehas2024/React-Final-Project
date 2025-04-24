// src/pages/AboutUsPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function AboutUsPage() {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/tours');
        console.log('Explore Tours clicked!');
    };

    return (
        <div className="text-white flex flex-col relative z-10">
            {/* Fixed Background Image (Full Page) */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1702914344649-d625ef6097de?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            </div>

            {/* Header */}
            <Header className="z-20" />

            {/* Hero Section */}
            <main className="min-h-screen flex items-center justify-center px-4 py-16 z-10 relative text-center mt-16">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-yellow-500 shadow-md">
                        Van Lang Tour
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed shadow-sm">
                        Your Gateway to Memorable Train Journeys
                    </p>
                    <button
                        onClick={handleExploreClick}
                        className="bg-yellow-500 text-black px-8 py-4 rounded-full hover:bg-yellow-600 text-lg font-semibold shadow-lg cursor-pointer"
                    >
                        Explore Tours
                    </button>
                </div>
            </main>

            {/* "Our Story" Section */}
            <section className="bg-black bg-opacity-80 py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-500 text-center">Our Story</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        At Van Lang Tour, our journey began with a shared passion for exploration and the unique charm of train travel...
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        From the outset, our focus has been on providing meticulously planned itineraries, comfortable accommodations...
                    </p>
                </div>
            </section>

            {/* "Who We Are" Section */}
            <section className="bg-gray-800 bg-opacity-90 py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-500 text-center">Who We Are</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Our team is a diverse group of travel enthusiasts, logistics experts, and customer service professionals...
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        We are dedicated to crafting unique and enriching travel experiences...
                    </p>
                </div>
            </section>

            {/* "Our Mission" Section */}
            <section className="bg-black bg-opacity-80 py-12 mb-8">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-500 text-center">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Our mission is to be the leading platform for discovering and booking exceptional train tours...
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        We aim to inspire a deeper appreciation for train travel as a sustainable and enriching way to explore the world...
                    </p>
                </div>
            </section>

            {/* Footer */}
            <Footer className="z-20" />
        </div>
    );
}

export default AboutUsPage;
