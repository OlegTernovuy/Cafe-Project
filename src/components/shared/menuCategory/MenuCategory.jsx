import React from "react";
import { Link } from 'react-router-dom'

import './menuCategory.css'

export const MenuCategory = () => {
  return (
    <div className="categoryMenu">
      <ul className="categoryMenuList">
        {/* <div className='headerLink'> */}
        <li>
          <Link to="/foodMenu">Сніданки</Link>
        </li>
        <li>
          <Link to="/foodMenu">Raw</Link>
        </li>
        <li>
          <Link to="/foodMenu">Холодні закуски</Link>
        </li>
        <li>
          <Link to="/foodMenu">Брускети</Link>
        </li>
        <li>
          <Link to="/foodMenu">Салати</Link>
        </li>
        <li>
          <Link to="/foodMenu">Супи</Link>
        </li>
        <li>
          <Link to="/foodMenu">Паста</Link>
        </li>
        <li>
          <Link to="/foodMenu">М'ясо</Link>
        </li>
        <li>
          <Link to="/foodMenu">Риба</Link>
        </li>
        <li>
          <Link to="/foodMenu">Мангал</Link>
        </li>
        <li>
          <Link to="/foodMenu">Гарніри</Link>
        </li>
        
        {/* </div> */}
      </ul>
    </div>
  );
};
