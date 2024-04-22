import React from 'react';
import { useNavigate } from 'react-router-dom';
import mockData from './mockData.json'; 

// Component to display available routes for purchase
const AvailableRoutesPage = () => {
  const navigate = useNavigate(); // Initializes navigate function from the hook

  // Function to handle click on a route, navigating to the detailed route info page
  const handleRouteClick = (routeId) => {
    navigate(`/route/${routeId}`); // Navigates to the RouteInfoPage with the specific route ID
  };

  // JSX rendering the available routes list
  return (
    <div>
      <h1>Available Routes</h1> {/* Heading for the page */}
      <div>
        {mockData.map((route) => ( // Mapping over each route in the mock data
          <div key={route.id} onClick={() => handleRouteClick(route.id)} style={{ cursor: 'pointer', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>{route.title}</h2> {/* Title of the route */}
            <p>Duration: {route.duration}</p> {/* Duration of the route */}
            <p>Price: ${route.price.toFixed(2)}</p> {/* Price of the route, formatted to two decimal places */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableRoutesPage;

