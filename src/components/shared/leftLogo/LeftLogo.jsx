import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalNavigate } from "../../providers/ModalProvider";
import { NavigateModal } from "../navigationModal/NavigateModal";

import logo from "../../../assets/images/food.svg";
import gg_menu_left from "../../../assets/images/gg_menu-left.png";
import telegram from "../../../assets/images/telegram.png";
import youtube from "../../../assets/images/youtube.png";

import "./leftLogo.css";

export const LeftLogo = () => {
  const {
    showNavigateModal,
    handleHideNavigateModal,
    handleShowNavigateModal,
  } = useContext(ModalNavigate);

  return (
    <div className="leftLogo">
      {showNavigateModal && (
        <NavigateModal handleHideNavigateModal={handleHideNavigateModal} />
      )}
      <div className="logoOnTop">
        <Link to="/">
          <img src={logo} alt="food" />
        </Link>
        <button className="hamburger" onClick={handleShowNavigateModal}>
          <img src={gg_menu_left} alt="food" />
        </button>
      </div>
      <div className="logoAnBottom">
        <a href="https://web.telegram.org/a/" target="_blank">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img src={youtube} alt="telegram" />
        </a>
      </div>
    </div>
  );
};
