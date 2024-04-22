import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importing necessary hooks from react-router-dom
import { useRoutes } from './routecontext'; // Importing the custom hook from context to access cart functions
import mockData from './mockData.json'; // Importing static data for routes

const RouteInfoPage = () => {
    const { id } = useParams(); // Retrieving the 'id' parameter from the URL
    const navigate = useNavigate(); // Hook to programmatically navigate between routes
    const { addToCart } = useRoutes(); // Destructuring the addToCart function from the context
    const route = mockData.find(r => r.id === id); // Searching for the route data based on the route ID from URL

    if (!route) {
        return <p>Route not found!</p>; // Display error message if no route matches the ID
    }

    const handlePurchase = () => {
        addToCart(route); // Adding the selected route to the cart using context function
        navigate('/purchase'); // Navigating to the purchase page after adding to cart
    };

    return (
        <div>
            <h1>{route.title}</h1> {/* Displaying the route title */}
            <p>{route.description}</p> {/* Displaying the route description */}
            <p>Duration: {route.duration}</p> {/* Displaying the duration of the route */}
            <p>Stops: {route.stops}</p> {/* Displaying the number of stops for the route */}
            <p>Price: ${route.price.toFixed(2)}</p> {/* Displaying the price of the route, formatted to two decimals */}
            <button onClick={handlePurchase}>Purchase Ticket</button> {/* Button to purchase the ticket */}
            <button onClick={() => navigate('/')}>Back to Routes</button> {/* Button to navigate back to the home page */}
        </div>
    );
};

export default RouteInfoPage; 


