import React from "react";

import { useSelector } from "react-redux";

import "../styles/product.css";
import "../styles/products.css";

import Product from "./product";

const BestSalesComponent = () => {
  const products = useSelector((state) => state.products.filtered);

  const bestSales = products && products.filter((item) => item.hasOwnProperty("newPrice"));

  return (
    <div className="products-container">
      {bestSales && bestSales.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          manifactor={product.manifactor}
          price={product.price}
          totalPrice={product.price}
          stars={product.stars}
          colors={product.colors}
          key={product.id}
          newPrice={product.newPrice}
        />
      ))}
    </div>
  );
};

export default BestSalesComponent;
