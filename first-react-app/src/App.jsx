import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
// import ShopPage from './Pages/ShopPage';
// import AboutUs from './Pages/AboutUs';
// import ContactUs from './Pages/ContactUs';
// import RoutesComponent from './routes/routes';
import Header from './components/Header';
import Footer from './components/Footer';





const App = () => {
  return (
    <div className="App">
      <Header/>
    <HomePage/>
    {/* <ShopPage/>
    <AboutUs/>
    <ContactUs/> */}
    <Footer/>
    </div>
  );
};

export default App;