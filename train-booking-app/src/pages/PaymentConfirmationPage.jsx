import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentConfirmationPage() {
    const location = useLocation();
    const { journey } = location.state || {};

    if (!journey) {
        return (
            <div className="container mx-auto p-4 text-center bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-600">Payment Confirmation</h1>
                <p className="text-gray-700 mt-2">Thank you for your payment.</p>
                <p className="text-gray-500 mt-4">No journey details available.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 text-center bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
            <p className="text-gray-700 mt-2">Thank you for your booking. Your payment has been confirmed.</p>
            <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Your Journey Details:</h2>
                <p><span className="font-semibold text-gray-700">Departure Time:</span> {journey.departureTime}</p>
                <p><span className="font-semibold text-gray-700">Origin:</span> {journey.origin}</p>
                <p><span className="font-semibold text-gray-700">Arrival Time:</span> {journey.arrivalTime}</p>
                <p><span className="font-semibold text-gray-700">Destination:</span> {journey.destination}</p>
                <p><span className="font-semibold text-gray-700">Price:</span> {journey.price}</p>
            </div>
            <p className="mt-8 text-gray-600">
                An email confirmation has been sent to your registered email address.
            </p>
        </div>
    );
}

export default PaymentConfirmationPage;
