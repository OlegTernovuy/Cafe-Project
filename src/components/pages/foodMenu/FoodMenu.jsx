import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import "./foodMenu.css";
import { HeaderMenu } from "../../shared/menuHeader/HeaderMenu";
import { MenuCategory } from "../../shared/menuCategory/MenuCategory";
import { Products } from "../../shared/products/Products";
import { Product } from "../../shared/product/Product";
import { url } from "../../../App.js";
import { CategoryProducts } from "../../shared/CategoryProducts/CategoryProducts";
import { Bag } from "../../shared/Bag/Bag";

export const FoodMenu = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });

    // // Local Server
    // axios.get(`http://localhost:3001/categories`).then((response) => {
    //   setCategories(response.data)
    // })

    axios.get(`${url}/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="wrapperMenu">
      <HeaderMenu />
      <MenuCategory cards={categories} />
      <Routes>
        <Route index element={<Products products={products} />} />
        <Route path="/:id" element={<Product />} />
        <Route path="*/categories/:name" element={<CategoryProducts />} />
        <Route path="*/bag" element={<Bag />} />
      </Routes>
    </div>
  );
};

//Local Server
// <Route path="*/:name" element={<CategoryProducts />}/>

//Fake API
// <Route path="*/categories/:name" element={<CategoryProducts />}/>
