import React, { useState } from 'react';

const RegisterStepTwo = ({ handlePrevious, handleNext, formData }) => {
    const [email, setEmail] = useState(formData.email || ''); // Use form data if available
    const [password, setPassword] = useState(formData.password || '');
    const [confirmPassword, setConfirmPassword] = useState(formData.confirmPassword || '');
    const [phone, setPhone] = useState(formData.phone || '');

    const onNext = () => {
        const stepTwoData = {
            email,
            password,
            confirmPassword,
            phone
        };
        handleNext(stepTwoData);
    };
    const onPrevious = () => {
        const stepTwoData = {
            email,
            password,
            confirmPassword,
            phone
        };
        handlePrevious(stepTwoData);
    };

    return (
        <div  className=" min-h-screen bg-cover bg-center"
              style={{
                  backgroundImage: `url(/images/train-1.jpg)`,
              }}
        >
            <div className="bg-black bg-opacity-80 min-h-screen px-4 py-6 flex flex-col">

                <div className="flex-grow flex items-center justify-center mt-16">
                    <div className="max-w-xl w-full bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-lg p-6">
                        <div className="flex justify-center space-x-6 mb-6">
                            <div className="w-8 h-8 rounded-full  border border-white text-white flex items-center justify-center ">
                                1
                            </div>
                            <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                                2
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center">
                                3
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-6 text-center text-white">
                            Ready to join Van Lang Tour?
                            <br />
                            Let’s get started
                        </h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 rounded bg-white text-black"
                                placeholder='abc@gmail.com'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-white text-sm mb-1">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-2 rounded bg-white text-black"
                                placeholder='09xxxxxxxxx'
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 rounded bg-white text-black"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="p-2 rounded bg-white text-black"
                            />
                        </div>


                        <div className="flex justify-between">
                            <button
                                onClick={onPrevious}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded w-1/3 mr-2"
                            >
                                Previous
                            </button>
                            <button
                                onClick={onNext}
                                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded w-2/3"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterStepTwo;