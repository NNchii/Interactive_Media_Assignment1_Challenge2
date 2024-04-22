import React, { createContext, useContext, useState } from 'react';

// Create a context for managing route-related data across the application
const RouteContext = createContext();

// Custom hook to provide easy access to the context data
export const useRoutes = () => useContext(RouteContext);

// Provider component that encapsulates the state and methods related to cart management
export const RouteProvider = ({ children }) => {
    // State to hold the cart items
    const [cart, setCart] = useState([]);

    // Function to add a route to the cart or increment its quantity if it already exists
    const addToCart = route => {
        const existingItem = cart.find(item => item.id === route.id);
        if (existingItem) {
            // If the item exists, increment its quantity
            setCart(cart.map(item =>
                item.id === route.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // If the item does not exist, add it with a quantity of 1
            setCart([...cart, { ...route, quantity: 1 }]);
        }
    };

    // Function to remove a route from the cart
    const removeFromCart = routeId => {
        // Filter out the item by its id
        setCart(cart.filter(item => item.id !== routeId));
    };

    // Function to update the quantity of a specific cart item
    const updateQuantity = (routeId, quantity) => {
        // Map over the cart items and update the quantity of the specified item
        setCart(cart.map(item =>
            item.id === routeId ? { ...item, quantity } : item
        ));
    };

    // Provide the cart data and methods via context to be consumed by component tree
    return (
        <RouteContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </RouteContext.Provider>
    );
};


