import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AvailableRoutesPage from './availableRoutesPage';
import RouteInfoPage from './routeInfoPage';
import TicketPurchasePage from './ticketPurchasePage';
import ConfirmationPage from './confirmationPage';
import Navbar from './navbar';

// The App component defines the main structure of the application
function App() {
  return (
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<AvailableRoutesPage />} /> {/* Route for the home page showing available routes */}
        <Route path="/route/:id" element={<RouteInfoPage />} /> {/* Route for displaying specific route details */}
        <Route path="/purchase" element={<TicketPurchasePage />} /> {/* Route for the ticket purchase page */}
        <Route path="/confirmation" element={<ConfirmationPage />} /> {/* Route for the purchase confirmation page */}
      </Routes>
    </Router>
  );
}

export default App; 

