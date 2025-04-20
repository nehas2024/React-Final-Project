import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterStepOne = ({ handleNext }) => {
    const [language, setLanguage] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(/images/train-1.jpg)`, // Reference to the public folder image
            }}
        >
            <div className="bg-black bg-opacity-80 min-h-screen px-4 py-6 flex flex-col">
                <Header />
                {/* Add mt-16 to push the main content down */}
                <div className="flex-grow flex items-center justify-center mt-16">
                    <div className="max-w-xl w-full bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-lg p-6">
                        {/* Step Indicators */}
                        <div className="flex justify-center space-x-6 mb-6">
                            <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">1</div>
                            <div className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center">2</div>
                            <div className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center">3</div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl font-bold mb-6 text-center text-white">
                            Ready to join Van Lang Tour?<br />Let’s get started
                        </h2>

                        {/* Language Selection */}
                        <div className="mb-4">
                            <label htmlFor="language" className="block text-white text-sm mb-1">Preferred Language</label>
                            <select
                                id="language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="w-full p-2 rounded bg-white text-black"
                            >
                                <option value="">Select language</option>
                                <option value="english">English</option>
                                <option value="vietnamese">Vietnamese</option>
                            </select>
                        </div>

                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Last name (example: NGUYEN)"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="p-2 rounded bg-white text-black"
                            />
                            <input
                                type="text"
                                placeholder="Middle name"
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}
                                className="p-2 rounded bg-white text-black"
                            />
                            <input
                                type="text"
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="p-2 rounded bg-white text-black md:col-span-2"
                            />
                        </div>

                        {/* Gender and DOB */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="p-2 rounded bg-white text-black"
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="p-2 rounded bg-white text-black"
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded w-full"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default RegisterStepOne;