import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterStepOne from './RegisterStepOne'; // Import your step components
import RegisterStepTwo from './RegisterStepTwo';
import RegisterStepThree from './RegisterStepThree';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const handlePrevious = (data) => {
        setFormData({ ...formData, ...data });
        setStep(step - 1);
    };

    const handleRegister = (data) => {
        setFormData({ ...formData, ...data });
        console.log('Form Data:', formData);
        // In a real app, you would send this data to your backend
        // Example:  await axios.post('/api/register', formData);
        navigate('/login'); // Redirect to login after successful registration
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <RegisterStepOne
                        handleNext={handleNext}
                    />
                );
            case 2:
                return (
                    <RegisterStepTwo
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                        formData={formData}
                    />
                );
            case 3:
                return (
                    <RegisterStepThree
                        handlePrevious={handlePrevious}
                        handleRegister={handleRegister}
                        formData={formData}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div  className="bg-gray-900 text-white">
            <Header />
            <div className="container mx-auto py-8">
                {renderStep()}
            </div>
            <Footer/>
        </div>

    );
};

export default RegisterPage;