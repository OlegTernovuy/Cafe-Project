import React from "react";
import { Link } from 'react-router-dom'

import shoppingBasket from "../../../assets/images/shoppingBasket.png";
import "./headerMenu.css";

export const HeaderMenu = () => {
  return (
    <div className="HeaderMenu">
      <div className="HeaderMenuLogo">
      <Link to="/foodMenu">Menu</Link>
        <button>
          <img src={shoppingBasket} alt="shoppingBasket" />
        </button>
      </div>
    </div>
  );
};
