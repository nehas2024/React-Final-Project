import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { journey } = location.state || {};  // Get journey data

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [error, setError] = useState('');

    if (!journey) {
        return <div className="container mx-auto p-4">Error: No journey data provided for payment.</div>;
    }

    const handlePayment = () => {
        //  Here, you would send the paymentDetails to a server
        //  to process the payment.  This is a simplified example.
        console.log('Payment Details:', paymentDetails);
        console.log('Journey:', journey);

        // Basic validation
        if (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv) {
            setError('Please fill in all payment fields.');
            return;
        }
        setError('');

        // Simulate successful payment (replace with actual payment processing)
        const paymentSuccessful = true;

        if (paymentSuccessful) {
            // Navigate to confirmation page
            navigate('/payment-confirmation', { state: { journey } });
        } else {
            alert('Payment failed. Please try again.'); // Replace with a better UI notification
        }
    };

    const handleChange = (e) => {
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-blue-600">Payment</h1>
            <p className="mb-4 text-gray-700">Please enter your payment details to complete your booking.</p>
            <div className="mb-4 p-4 border rounded-lg bg-gray-50">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">Your Journey Details:</h2>
                <p><span className="font-semibold text-gray-700">Departure Time:</span> {journey.departureTime}</p>
                <p><span className="font-semibold text-gray-700">Origin:</span> {journey.origin}</p>
                <p><span className="font-semibold text-gray-700">Arrival Time:</span> {journey.arrivalTime}</p>
                <p><span className="font-semibold text-gray-700">Destination:</span> {journey.destination}</p>
                <p><span className="font-semibold text-gray-700">Price:</span> {journey.price}</p>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="MM/YY"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="123"
                    />
                </div>
            </div>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

            <button
                onClick={handlePayment}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Complete Payment
            </button>
            <button onClick={() => navigate(-1)} className="mt-4 inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Cancel
            </button>
        </div>
    );
}

export default PaymentPage;
