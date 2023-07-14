import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Products } from '../products/Products'
import axios from 'axios'

export const CategoryProducts = () => {
    const { name } = useParams()
    // console.log(name, 'name');

    const [products, setProducts] = useState([])
    useEffect(() => {

    // //Local Server
    //   axios.get(`http://localhost:3001/${name}`).then((response) => {
    //     setProducts(response.data)
    //   })

    axios.get(`https://fakestoreapi.com/products/category/${name}`).then((response) => {
        setProducts(response.data)
      })
    }, [name])

    if (products.length === 0) return <div>Loading.....</div>
  return (
    <Products products={products}/>
  )
}