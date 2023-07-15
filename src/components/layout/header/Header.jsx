import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../providers/ModalProvider";
import "./style.css";

export const Header = () => {
  const { handleShowReservTableModal } = useContext(ModalContext);

  return (
    <header className="header">
      <ul className="headerMenu">
        <div className="headerLink">
          <li>
            <Link to="/foodMenu">Меню</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li>
            <Link to="/">Оплата</Link>
          </li>
          <button onClick={handleShowReservTableModal} className="reservBtn">
            Бронювання
          </button>
        </div>
      </ul>
    </header>
  );
};
