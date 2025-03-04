import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <Filter />
        <ProductCard/>
        <ProductList />
      </div>
    </div>
  );
};

export default ShopPage;