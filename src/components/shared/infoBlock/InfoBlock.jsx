import React from "react";
import "./infoBlock.css";

export const InfoBlock = ({ title, heading, desc }) => {
  return (
    <div className="cafeInfo">
      <h2 className="cafe-info-title">{title}</h2>
      <h1>{heading}</h1>
      <p>{desc}</p>
    </div>
  );
};
