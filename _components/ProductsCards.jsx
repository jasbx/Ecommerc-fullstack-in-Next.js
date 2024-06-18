"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApi from '../_utils/ProductApi'

const ProductsCards = () => {
  const [productList,SetProductList]=useState([]);

  useEffect(()=>{
    getlatestProduct_()
  },[])
  const getlatestProduct_=()=>{
    ProductApi.getLatestProduct().then(res=>{
      SetProductList(res.data.data)
    })
  }
  return (
    <div className='px-10 gap-6  md:px-20'>
      <h2 className='my-4 text-xl'>Our Latest Products</h2>
      <ProductList   productList={productList}  />
    </div>
  )
}

export default ProductsCards
