// src/pages/LoginPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LoginPage() {
    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <div className="container mx-auto py-16 text-center">
                <h1 className="text-4xl font-bold mb-8">Login to Your Account</h1>
                <p className="text-lg">
                    This is the login page where users can enter their credentials to access their account.
                    (Form and functionality will be added here)
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;