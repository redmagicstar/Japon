import React from "react";

import { useSelector } from "react-redux";

import "../styles/product.css";
import "../styles/products.css";
// import { PRODUCTS } from "./productsStore";
import Product from "./product";

const Products = () => {
  const products = useSelector((state) => state.products.filtered);
  return (
    <div className="products-container">
      {products && products.map((product) => (
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

export default Products;
