import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

export const Products = ({ products = [] }) => {
  const dispatch = useDispatch();

  const addToBag = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1
      })
    );
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
