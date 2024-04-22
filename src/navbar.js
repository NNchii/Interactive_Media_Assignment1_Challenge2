import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#004d99', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'white', margin: '0 20px' }}>Home</Link>
            <Link to="/purchase" style={{ color: 'white', margin: '0 20px' }}>Your Cart</Link>
        </nav>
    );
};

export default Navbar;
