import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from './routecontext';

// Component for displaying the purchase confirmation message and handling post-purchase actions
const ConfirmationPage = () => {
    // Hook to programmatically navigate to other routes
    const navigate = useNavigate();
    // Extracting clearCart method from the context to be used for clearing the cart after purchase
    const { clearCart } = useRoutes();

    // useEffect to handle actions after the component mounts
    useEffect(() => {
        // Setting a timeout to delay actions after purchase
        setTimeout(() => {
            clearCart(); // Clears the cart from the context, resetting it for future purchases
            navigate('/'); // Navigates back to the home page after 2 seconds
        }, 2000); // 2000 milliseconds delay
    }, [clearCart, navigate]); // Dependencies of the useEffect, to ensure it only reruns if these functions change

    // Render the confirmation message
    return (
        <div>
            <h1>Purchase Confirmed!</h1> 
            <p>Your tickets have been successfully purchased. Redirecting to the main page...</p> 
        </div>
    );
};

export default ConfirmationPage;

