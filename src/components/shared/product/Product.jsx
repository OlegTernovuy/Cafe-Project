import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./product.css";
import { InputNumber } from "rsuite";
import breacfast from "../../../assets/images/breakfast.png";

export const Product = () => {
  const { id } = useParams();
  console.log(id, "id");
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }, []);

// useEffect(() => {
//     axios.get(`http://localhost:3001/breakfast/${id}`).then((response) => {
//       setProduct(response.data)
//     })
//   }, [])

  if (!Object.keys(product).length > 0) return <div>Product Not Found</div>;
  return (
    <div className="mainProduct">
      <div className="PhotoProduct">
        <img src={product?.image} alt="breacfast" />
        {/* <img src={breacfast} alt="breacfast" /> */}
      </div>
      <div className="describeProduct">
        <h2>{product?.title}</h2>
        <div>
          <p className="PriceAndWeight">
            <span className="price">${product?.price}</span>
            <span className="slash">/</span>
            <span className="weight">400 грамм</span>
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
