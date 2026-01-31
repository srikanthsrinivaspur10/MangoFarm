import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import FarmerDashboard from "./pages/FarmerDashboard";

function App() {
  return (
    <Router>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

