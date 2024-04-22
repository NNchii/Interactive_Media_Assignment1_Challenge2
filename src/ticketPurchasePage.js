import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from './routecontext'; // Ensure this import path is correct

const TicketPurchasePage = () => {
    const { cart, removeFromCart, updateQuantity } = useRoutes(); // Destructure the needed functions from the context
    const navigate = useNavigate();
    const [error, setError] = useState('');  // State to handle error messages

    // Check if the cart is empty and return a message if it is
    if (cart.length === 0) {
        return <p>No tickets in your cart.</p>;
    }

    // Function to handle the checkout process
    const handleCheckout = () => {
        // Validate that no ticket quantity is zero before proceeding
        const invalid = cart.some(item => item.quantity <= 0);
        if (invalid) {
            setError('Please select at least one ticket for each route before proceeding.');
            return;
        }
        setError('');  // Clear any previous error messages
        navigate('/confirmation'); // Navigate to the confirmation page
    };

    // Function to handle changes in ticket quantity
    const handleQuantityChange = (routeId, quantity) => {
        if (quantity >= 0) {  // Check if the quantity is non-negative
            updateQuantity(routeId, quantity);  // Update the quantity in the context
        }
    };

    // Calculate the total amount of the cart
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.title} - ${item.price.toFixed(2)} x {item.quantity}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        min="0"
                        onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}  
            <button onClick={handleCheckout}>Checkout</button>  
        </div>
    );
};

export default TicketPurchasePage;


