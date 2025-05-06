import React from 'react';

const RegisterStepThree = ({ handlePrevious, handleRegister, formData }) => {
    console.log("Form Data:", formData);
    const onRegister = () => {
        const allData = {
            ...formData,
        };
        console.log(allData)
        handleRegister(allData);
    };
    const onPrevious = () => {
        const allData = {
            ...formData,
        };
        handlePrevious(allData);
    };

    return (
        <div className=" min-h-screen bg-cover bg-center"
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
                            <div className="w-8 h-8  border border-white text-white flex items-center justify-center ">
                                2
                            </div>
                            <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                                3
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-6 text-center text-white">
                            Complete Registration
                        </h2>
                        <div className="text-white">
                            <p>
                                <strong>Preferred Language:</strong> {formData.language}
                            </p>
                            <p>
                                <strong>Last Name:</strong> {formData.lastName}
                            </p>
                            <p>
                                <strong>Middle Name:</strong> {formData.middleName}
                            </p>
                            <p>
                                <strong>First Name:</strong> {formData.firstName}
                            </p>
                            <p>
                                <strong>Gender:</strong> {formData.gender}
                            </p>
                            <p>
                                <strong>Date of Birth:</strong> {formData.dob}
                            </p>
                            <p>
                                <strong>Email:</strong> {formData.email}
                            </p>
                            <p>
                                <strong>Phone Number:</strong> {formData.phone}
                            </p>
                            <p>
                                <strong>Password:</strong> {formData.password}
                            </p>
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={onPrevious}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded w-1/3 mr-2"
                            >
                                Previous
                            </button>
                            <button
                                onClick={onRegister}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded w-2/3"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterStepThree;
