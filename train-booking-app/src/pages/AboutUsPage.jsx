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
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            {/* Fixed Background Image (Hero Section) */}
            <div
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/train-about.jpg')` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay for better text contrast */}
            </div>

            {/* Header */}
            <Header className="z-20" />

            {/* Hero Text and Button */}
            <main className="flex-grow flex items-center justify-center px-4 py-16 z-10 relative mt-16 md:mt-16 lg:mt-16 text-center">
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
                        At Van Lang Tour, our journey began with a shared passion for exploration and the unique charm of train travel. Founded by a group of avid travelers, we envisioned a platform that would seamlessly connect adventurers with the beauty and convenience of railway journeys across Vietnam and beyond. Inspired by the rich history and scenic routes of train travel, we set out to curate exceptional tours that offer authentic cultural experiences and breathtaking landscapes.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        From the outset, our focus has been on providing meticulously planned itineraries, comfortable accommodations, and knowledgeable guides who share our love for discovery. We believe that train travel offers a slower, more immersive way to experience the world, fostering connections with local communities and providing unforgettable memories.
                    </p>
                    {/* You could add a small image or icon here to break up the text */}
                </div>
            </section>

            {/* "Who We Are" Section */}
            <section className="bg-gray-800 bg-opacity-90 py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-500 text-center">Who We Are</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Our team is a diverse group of travel enthusiasts, logistics experts, and customer service professionals, all united by a common goal: to make your train travel dreams a reality. We bring together years of experience in the tourism industry with a deep understanding of the nuances of train journeys.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        We are dedicated to crafting unique and enriching travel experiences, paying attention to every detail to ensure your comfort and satisfaction. From the initial booking process to the final destination, our team is committed to providing exceptional support and personalized service. We are more than just a tour company; we are your partners in exploration.
                    </p>
                    {/* Consider adding a team photo or a relevant train image here */}
                </div>
            </section>

            {/* "Our Mission" Section */}
            <section className="bg-black bg-opacity-80 py-12 mb-8">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-500 text-center">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Our mission is to be the leading platform for discovering and booking exceptional train tours. We strive to offer a curated selection of journeys that showcase the beauty, culture, and heritage of the destinations we serve. We are committed to providing a seamless and user-friendly booking experience, transparent pricing, and unparalleled customer support.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        We aim to inspire a deeper appreciation for train travel as a sustainable and enriching way to explore the world. By focusing on quality, authenticity, and customer satisfaction, we endeavor to create memorable travel experiences that exceed expectations.
                    </p>
                    {/* You could add a call to action or a relevant icon here */}
                </div>
            </section>

            {/* Footer */}
            <Footer className="z-20" />
        </div>
    );
}

export default AboutUsPage;