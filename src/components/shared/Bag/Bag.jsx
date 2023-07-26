import React from "react";
import "./bag.css";
import { Link } from "react-router-dom";
import { useItemList } from "../../../features/hooks/useItemList";
import { useAction } from "../../../features/hooks/useAction";

export const Bag = () => {
  const { addToCart, removeFromCart, deleteFromCart } = useAction();

  const { itemsList } = useItemList();

  const { totalQuantity } = useItemList();

  let totalCost = 0;

  itemsList.forEach((item) => {
    totalCost += item.totalPrice;
  });

  const handleInc = (product) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const handleDec = (id) => {
    removeFromCart(id);
  };

  const removeProduct = (id) => {
    deleteFromCart(id);
  };

  // if(!carts.length) return <div>Cart is Empty</div>

  return (
    <div className="wrapperBag">
      <div className="bag">
        <div className="items">
          <div className="ProductsTitle">
            <h2>Shopping Cart</h2>
            <p>{totalQuantity} Items</p>
          </div>
          <div className="ProductDetail">
            <div className="ProductDetailHeader">
              <h3 style={{ width: "40%" }}>PRODUCT DETAILS</h3>
              <h3 style={{ width: "20%" }}>QUANTITY</h3>
              <h3 style={{ width: "20%" }}>PRICE</h3>
              <h3 style={{ width: "20%" }}>TOTAL</h3>
            </div>

            {itemsList.map((cart) => {
              return (
                <div className="itemInBag" key={cart?.id}>
                  <div className="fitemInBagWrapper">
                    <div className="photo">
                      <img src={cart?.image} alt={"breakfast"} />
                    </div>
                    <div className="productDesc">
                      <span className="prodTitle">{cart?.name}</span>
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

                    <button onClick={() => handleInc(cart)}>+</button>
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
            <span className="itemsAmount">ITEMS {totalQuantity}</span>
            <span className="itemsPrice">{totalCost.toFixed(2)}$</span>
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
          <button className="ApplyButton">Apply</button>
          <div className="totalCost">
            <div className="itemsCost">
              <span>Total cost</span>
              <span>{(totalCost + 10).toFixed(2)}$</span>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
