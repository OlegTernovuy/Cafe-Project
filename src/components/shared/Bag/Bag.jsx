import React, { useEffect, useState } from "react";
import "./bag.css";
import { Link, useNavigate } from "react-router-dom";

export const Bag = () => {
  const navigate = useNavigate();

  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [carts]);

  const handleDec = (id) => {
    const index = carts.findIndex((cart) => cart.id === id);
    if (carts[index].quantity > 1) {
      carts[index].quantity--;
      localStorage.setItem("cart", JSON.stringify(carts));
      navigate("/foodMenu/*/bag");
    }
  };

  const handleInc = (id) => {
    const index = carts.findIndex((cart) => cart.id === id);
    carts[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(carts));
    navigate("/foodMenu/*/bag");
  };

  const removeProduct = (id) => {
    const index = carts.findIndex((cart) => cart.id === id);
    carts.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(carts));
    navigate("/foodMenu/*/bag");
  };

  const promoCode = () => {
    setTotalPrice(totalPrice * 0.9);
  };

  // if(!carts.length) return <div>Cart is Empty</div>

  return (
    <div className="wrapperBag">
      <div className="bag">
        <div className="items">
          <div className="ProductsTitle">
            <h2>Shopping Cart</h2>
            <p>{carts?.length} Items</p>
          </div>
          <div className="ProductDetail">
            <div className="ProductDetailHeader">
              <h3 style={{ width: "40%" }}>PRODUCT DETAILS</h3>
              <h3 style={{ width: "20%" }}>QUANTITY</h3>
              <h3 style={{ width: "20%" }}>PRICE</h3>
              <h3 style={{ width: "20%" }}>TOTAL</h3>
            </div>

            {carts.map((cart) => {
              return (
                <div className="itemInBag" key={cart?.id}>
                  <div className="fitemInBagWrapper">
                    <div className="photo">
                      <img src={cart?.image} alt={"breakfast"} />
                    </div>
                    <div className="productDesc">
                      <span className="prodTitle">{cart?.title}</span>
                      <span className="prodCategory">{cart?.category}</span>
                      <div
                        className="deleteProd"
                        onClick={() => removeProduct(cart?.id)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="prodAmount">
                    <button onClick={() => handleDec(cart?.id)}>-</button>

                    <input
                      className="quanity"
                      type="text"
                      value={cart?.quantity}
                    />

                    <button onClick={() => handleInc(cart?.id)}>+</button>
                  </div>
                  <span className="price">${(cart?.price).toFixed(2)}</span>
                  <span className="price">
                    ${(cart?.price * cart?.quantity).toFixed(2)}
                  </span>
                </div>
              );
            })}
            <Link to={"/foodMenu"} className="ConShop">
              Continue shopping
            </Link>
          </div>
        </div>
        <div className="summary">
          <div className="summaryTitle">
            <h2>Order Summary</h2>
          </div>
          <div className="summaryDetails">
            <span className="itemsAmount">ITEMS {carts?.length}</span>
            <span className="itemsPrice">{totalPrice.toFixed(2)}$</span>
          </div>
          <div>
            <label className="Shipping">Shipping</label>
            <select className="selectStandard">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="promo">
            <label>Promo Code</label>
            <label>Example: SALE</label>
            <input type="text" id="promo" placeholder="Enter your code" />
          </div>
          <button className="ApplyButton" onClick={() => promoCode()}>
            Apply
          </button>
          <div className="totalCost">
            <div className="itemsCost">
              <span>Total cost</span>
              <span>{(totalPrice + 10).toFixed(2)}$</span>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
