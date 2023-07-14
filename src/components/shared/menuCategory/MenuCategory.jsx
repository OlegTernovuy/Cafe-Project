import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./menuCategory.css";

export const MenuCategory = ({ cards = [] }) => {
  return (
    <div className="categoryMenu">
      <ul className="categoryMenuList">
        {cards?.map((card) => {
          return (
            <li key={card}>
              <NavLink to={`*/categories/${card}`}>{card || 'Example Product'}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


//Local Server
// <NavLink to={`*/${card.path}`}>{card.title || 'Example Product'}</NavLink>

// Fake Api
// <NavLink to={`*/categories/${card}`}>{card || 'Example Product'}</NavLink>