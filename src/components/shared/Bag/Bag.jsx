import React from "react";
import "./bag.css";
import breakfast from "../../../assets/images/breakfast.png";
import { Link } from "react-router-dom";

export const Bag = () => {
  return (
    <div className="wrapperBag">
      <div className="bag">
        <div className="items">
          <div className="ProductsTitle">
            <h2>Shopping Cart</h2>
            <p>1 Items</p>
          </div>
          <div className="ProductDetail">
            <div className="ProductDetailHeader">
              <h3 style={{ width: "40%" }}>PRODUCT DETAILS</h3>
              <h3 style={{ width: "20%" }}>QUANTITY</h3>
              <h3 style={{ width: "20%" }}>PRICE</h3>
              <h3 style={{ width: "20%" }}>TOTAL</h3>
            </div>
            <div className="itemInBag">
              <div className="fitemInBagWrapper">
                <div className="photo">
                  <img src={breakfast} alt={"breakfast"} />
                </div>
                <div className="productDesc">
                  <span className="prodTitle">
                    {"White Gold Plated Princess"}
                  </span>
                  <span className="prodCategory">{"Jewelery"}</span>
                  <div className="deleteProd">Remove</div>
                </div>
              </div>
              <div className="prodAmount">
                <button>-</button>

                <input className="quanity" type="text" value={"1"} />

                <button>+</button>
              </div>
              <span className="price">${"400"}</span>
              <span className="price">${"800"}</span>
            </div>
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
            <span className="itemsAmount">ITEMS 2</span>
            <span className="itemsPrice">128.98$</span>
          </div>
          <div>
            <label className="Shipping">Shipping</label>
            <select className="selectStandard">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="promo">
            <label
              for="promo"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
            />
          </div>
          <button className="ApplyButton">
            Apply
          </button>
          <div className="totalCost">
            <div className="itemsCost">
              <span>Total cost</span>
              <span>128.98$</span>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
