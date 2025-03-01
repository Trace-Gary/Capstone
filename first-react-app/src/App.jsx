import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './Pages/ShopPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import HomePage from './Pages/HomePage';
import Filter from './components/Filter';


const App = () => {
  return (
    <Header/>
  );
};

export default App;