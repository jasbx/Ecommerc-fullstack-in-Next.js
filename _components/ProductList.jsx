import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
    <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
  {
    productList.map(item=>(
      <div>
         <ProductItem key={item.id} product={item}/>
      </div>
    ))
  }
    </div>
  )
}

export default ProductList
