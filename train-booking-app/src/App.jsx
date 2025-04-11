// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import BookingPage from './pages/BookingPage';
import AboutUsPage from './pages/AboutUsPage.jsx';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                {/* Add other routes as needed */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;