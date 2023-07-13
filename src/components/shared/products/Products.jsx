import React from "react";
import "./products.css";
import { Link } from "react-router-dom";

export const Products = ({ products = [] }) => {
  return (

      <div className="products">
        {products.map((product) => {
          console.log(product);
          return (
            <Link
              to={`/foodMenu/${product.id}`}
              className="card"
              key={product.id}
              preventScrollReset={true}
            >
              <img src={product.image} alt="" />
              <p>{product.title}</p>
              <div className="priceAndBasket">
                <h2>{product.price} ₴</h2>
                <button className="addToBasket">В корзину</button>
              </div>
            </Link>
          );
        })}
      </div>
  );
};
