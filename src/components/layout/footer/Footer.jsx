import React from "react";
import "./footer.css";
import { FooterMap } from "../../shared/map/FooterMap";
import food from '../../../assets/images/food.svg'
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="mainFooter">
      <FooterMap/>
      <div className="footer">
        <Link to='home' smooth={true} offset={-700} duration={700}><img src={food} alt="food" /></Link>
        <p>Політика конфіденційності</p>
        <p>Виконав Ternovuy</p>
      </div>
    </footer>
  );
};
