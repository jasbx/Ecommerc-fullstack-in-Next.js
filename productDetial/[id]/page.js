"use client"
import BreadCump from '../../_components/BreadCump'
import ProductApi from '../../_utils/ProductApi'
import React, { useEffect, useState } from 'react'
import ProductBanner  from './_components/ProductBanner'
import Productinfo from './_components/Productinfo'
import ProductList from '../../_components/ProductList'
import { usePathname } from 'next/navigation'
import ProductInfo from './_components/Productinfo'

const ProductDetails = ({params}) => {
  const path=usePathname();
 const [item,SetItem] =useState([])
 const [productList,SetItemList] =useState([])
  useEffect(()=>{
    getproductById_()

  },[params?.id])
  const getproductById_=()=>{
    ProductApi.getProductById(params.id).then(res=>{
    SetItem(res.data.data)
    getlistProductByFilter(res.data.data)
    })
  }
  const getlistProductByFilter=(item)=>{
ProductApi.getProductByFilter(item?.attributes.category).then(res=>{
  
  SetItemList(res?.data?.data)
})
  }
  return (

    <div className='px-10 md:px28 py-8'>
      <BreadCump path={path}/>
      <div className=' grid gap-5 sm:gap-0 grid-cols-1 sm:grid-cols-2 justify-around mt-10'>
        <ProductBanner item={item}/>
        <ProductInfo product={item}/>
      </div>
      <div>
        
        <h2 className='mt-24 mb-4 text-xl'>Simelar Products</h2>
       <ProductList productList={productList}/>
        </div>
    </div>
  )
}

export default ProductDetails
