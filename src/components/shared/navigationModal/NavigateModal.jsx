import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../providers/ModalProvider";
import logo from "../../../assets/images/food.svg";
import "./navigateModal.css";

import closeBtn from "../../../assets/images/closeBtn.svg";

export const NavigateModal = ({ handleHideNavigateModal }) => {
  const { handleShowReservTableModal } = useContext(ModalContext);

  const closeAllModal = () => {
    handleHideNavigateModal();
    handleShowReservTableModal();
  };

  return (
    <div className="navModal">
      <Link to="/" onClick={handleHideNavigateModal}>
        <img src={logo} alt="food" />
      </Link>
      <button
        onClick={handleHideNavigateModal}
        className="hidenBtn"
        type="button"
      >
        <img src={closeBtn} alt="close" />
      </button>
      <ul>
        <li>
          <Link to="/foodMenu" onClick={handleHideNavigateModal}>
            Меню
          </Link>
        </li>
        <li>
          <Link to="/delivery" onClick={handleHideNavigateModal}>
            Доставка
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleHideNavigateModal}>
            Оплата
          </Link>
        </li>
      </ul>
      <button onClick={closeAllModal} className="reservedBtn">
        Бронювання
      </button>
    </div>
  );
};
