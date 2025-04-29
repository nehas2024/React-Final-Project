import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ToursPage from './pages/ToursPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterStepOne from './pages/RegisterPage';
import TourDetailsPage from './pages/TourDetailsPage';
import PaymentPage from './pages/PaymentPage';
import PaymentConfirmationPage from './pages/PaymentConfirmationPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/tours" element={<ToursPage />} />
                <Route path="/tours/:tourName" element={<TourDetailsPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterStepOne />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
            </Routes>
        </Router>
    );
}

export default App;
