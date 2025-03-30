// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages and components from the landing_page folder
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import HomePage from "./landing_page/HomePage";
import ProductPage from "./landing_page/ProductPage";
import PricingPage from "./landing_page/PricingPage";
import SupportPage from "./landing_page/SupportPage";
import AboutPage from "./landing_page/AboutPage";

function App() {
  return (
    <Router>
      {/* Navbar is displayed on all pages */}
      <Navbar />

      <Routes>
        {/* Define all routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Footer is displayed on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
