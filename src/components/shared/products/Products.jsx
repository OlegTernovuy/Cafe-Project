import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { handleCart } from "../../../features/HandleCard";

export const Products = ({ products = [] }) => {
  return (
    <div className="products">
      {products.map((product) => {
        // console.log(product);
        return (
          <div className="card">
            <Link to={`/foodMenu/${product.id}`} key={product.id}>
              <img src={product.image} alt="" />
              <p>{product.title}</p>
            </Link>
            <div className="priceAndBasket">
              <h2>{product.price} ₴</h2>
              <button
                className="addToBasket"
                onClick={() => {
                  handleCart(product);
                }}
              >
                В корзину
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
