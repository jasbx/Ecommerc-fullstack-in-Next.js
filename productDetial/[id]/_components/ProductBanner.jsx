import React from 'react'
import Image from 'next/image'
const ProductBanner = ({item}) => {
  return (
    <div>
   {

item.attributes?.img?.data?.attributes?.name ?<Image
    width={400}
    height={400}
    alt='items'
    className='rounded-lg '
    src={`data:image/${item.attributes?.img?.data?.attributes?.name}`}
    ></Image>:
    
    <div className="loader">
    <div className="load-inner load-one"></div>
    <div className="load-inner load-two"></div>
    <div className="load-inner load-three"></div>
    <span className="text">Loading...</span>
  </div>
   }

    </div>
  )
}

export default ProductBanner
