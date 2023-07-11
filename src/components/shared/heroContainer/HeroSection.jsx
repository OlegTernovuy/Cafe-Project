import React from 'react'
import homeCafe from "../../../assets/images/homeCafe.svg";

import "../heroContainer/style.css";

export const HeroSection = () => {
  return (
    <div className="container">
    <img className="backPhoto" src={homeCafe} alt="HomeCafe" />
    <div className="intro">
      <div className="intro_inner">
        <h3 id="home">Оглядовий ресторан Diamond Food <br/> у центрі нашого міста</h3>
      </div>
    </div>
  </div>
  )
}
