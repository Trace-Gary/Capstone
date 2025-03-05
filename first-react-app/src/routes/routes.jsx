import React from "react";
// import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage.jsx";
import ShopPage from "../Pages/ShopPage";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import { Routes, Route } from 'react-router-dom';




const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
    );
};

export default RoutesComponent;