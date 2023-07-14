import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./product.css";
import { url } from '../../../App.js'

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // eslint-disable-next-line
    axios.get(`${url}/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!Object.keys(product).length > 0) return <div>Product Not Found</div>;
  return (
    <div className="mainProduct">
      <div className="PhotoProduct">
        <img src={product?.image} alt="breacfast" />
      </div>
      <div className="describeProduct">
        <h2>{product?.title}</h2>
        <div>
          <p className="PriceAndWeight">
            <span className="price">${product?.price}</span>
            <span className="slash">/</span>
            <span className="weight">{product?.weight} грамм</span>
          </p>
          <p className="numberOfServings">Кількість порцій:</p>
          <div className="buyDishes">
            <input type="number" className="numberofDishes" min={1} max={50} step={1} />
            <button className="addToBasket">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Product
