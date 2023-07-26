import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { useAction } from "../../../features/hooks/useAction";

export const Products = ({ products = [] }) => {
  const { addToCart } = useAction();

  const addToBag = (product) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
    });
    alert("Product added to cart");
  };

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <Link to={`/foodMenu/${product.id}`} key={product.id}>
              <img src={product.image} alt="" />
              <p>{product.title}</p>
            </Link>
            <div className="priceAndBasket">
              <h2>{product.price} ₴</h2>
              <button className="addToBasket" onClick={() => addToBag(product)}>
                В корзину
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
