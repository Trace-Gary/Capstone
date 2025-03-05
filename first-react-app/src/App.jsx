import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RoutesComponent from './routes/routes';
import Header from './components/Header';
import Navbar from './components/NavBar';
import RoutesComponent from './routes/routes';
import Footer from './components/Footer';
 






const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <RoutesComponent/> 
      <Footer/>
    </div>
  );
};

export default App;