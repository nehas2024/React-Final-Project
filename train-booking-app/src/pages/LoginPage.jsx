import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // To display error messages
    const navigate = useNavigate();

    const handleLogin = () => {
        // 1. Basic Validation
        if (!phoneNumber || !password) {
            setError('Please enter both phone number and password.');
            return;
        }

        // 2.  Authentication (Simulated for this example)
        //   In a real application, you'd send this data to a server
        //   using an API (e.g., with fetch or axios).  This is a SIMULATION.
        const storedUser = localStorage.getItem('user'); // Get user data (simulated)

        if (storedUser) {
            const user = JSON.parse(storedUser); //parse the user object.
            if (user.phoneNumber === phoneNumber && user.password === password) {
                // 3. Successful Login
                console.log('Login successful!');
                setError(''); // Clear any previous error
                // Store some user session data (optional, but common)
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                // 4. Navigate to Dashboard/Home
                navigate('/dashboard'); //  Change '/dashboard'
                return;
            }
        }
        // 4.  Invalid Credentials
        setError('Invalid phone number or password.');
        console.log('Login failed.');
    };

    return (
        <div className="bg-gray-900 text-white h-screen flex flex-col">
            <Header />
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                style={{ backgroundImage: `url('/images/train-1.jpg')` }}
            ></div>
            <div className="flex-grow bg-black bg-opacity-80 flex items-center justify-center px-4 py-10 mt-16">
                <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-white text-sm font-bold mb-2">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-white text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>} {/* Display error message */}
                    <button
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <p className="text-center mt-4 text-gray-300 text-sm">
                        Don't have an account? <Link to="/register" className="text-yellow-400 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;