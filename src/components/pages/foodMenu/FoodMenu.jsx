import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";

import axios from 'axios'
import './foodMenu.css'
import { HeaderMenu } from '../../shared/menuHeader/HeaderMenu'
import { MenuCategory } from '../../shared/menuCategory/MenuCategory'
import { Products } from '../../shared/products/Products'
import { Product } from '../../shared/product/Product'

export const FoodMenu = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

  // useEffect(() => {
  //   axios.get('http://localhost:3001/breakfast').then((response) => {
  //     setProducts(response.data)
  //   })
  // }, [])

  return (
    <div className='wrapperMenu'>
      <HeaderMenu/>
      <MenuCategory/>
      {/* {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div>
          Loading...
        </div>
      } */}
      {/* <Products/> */}
      <Routes>
        <Route index element={<Products products={products}/>} />
        <Route path="/:id" element={<Product/>}/>
      </Routes>
    </div>
  )
}
