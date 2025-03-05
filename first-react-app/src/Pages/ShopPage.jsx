import React from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";


const ShopPage = () => {
  return (
    <main>
      <Filter/>
      <ProductList/>
      <ProductCard/>
    </main>
  );
};

export default ShopPage;