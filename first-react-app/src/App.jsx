import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ContentRoutes from './contents/contentroutes';




const App = () => {
  return (
    <div className="App">
    <HomePage/>
    <ShopPage/>
    <AboutUs/>
    <ContactUs/>
    </div>
  );
};

export default App;