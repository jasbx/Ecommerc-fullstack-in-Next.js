import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { List } from 'lucide-react'
const ProductItem = ({product}) => {
  console.log(product)
  return (
    <Link href={`/productDetial/${product?.id}`}  className='hover:border hover:cursor-pointer hover:shadow-md rounded-md border-teal-400'>
<Image
width={200}
alt='img'
height={200}
className='rounded-t-lg h-[170px] object-cover'
src={`data:image/${product?.data?.attributes?.img?.data?.attributes?.name}`}
></Image>
<div className='flex p-3 bg-gray-50 rounded-b-lg justify-around items-center'>
<div className=''>
<h2 className='text-[14px] font-medium line-clamp-1'>{product.attributes.title}</h2>

<h2 className='text-[10px] flex gap-1 items-center text-gray-400'><List className='w-4 h-4' />{product.attributes.category}</h2>
</div>
<h2 className=''>{product.attributes?.price}</h2>
</div>
    </Link>
  )
}

export default ProductItem
