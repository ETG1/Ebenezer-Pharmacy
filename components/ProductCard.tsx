import { urlFor } from '@/sanity/lib/image'
import { ProductData } from '@/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdStar } from 'react-icons/md'
import Price from './Price'
import AddToCartButton from './AddToCartButton'

const ProductCard = ({item}: {item: ProductData}) => {
  return (
    <div className="border border-px border-grayText/40 rounded-xl relative group overflow-hidden">
        <div className="overflow-hidden">
            <Link href={`/product/${item?.slug.current}`}>
              <Image
                src={urlFor(item?.image).url()}
                alt={item?._type}
                width={500}
                loading="lazy"
                height={500}
                className="w-full h-72 object-cover rounded-xl group-hover:scale-105 hoverEffect"/>
            </Link>
        </div>
        <div className="px-6 flex flex-col items-center gap-2">
          <div className="text-base text-grayText flex items-center">
            {Array?.from({length: 5})?.map((_,index) => {
              const filled = index + 1 <= Math.floor(item?.ratings);
              const halfFilled = index + 1 > Math.floor(item?.ratings) && index < Math.ceil(item?.ratings);
              return (
                <MdStar key={index} className={`${filled ? "text-[#fa8900]": halfFilled ? "text-yellow-200" : "text-grayText"}`}/>
              )
            })}
          </div>
          <p className="uppercase text-xs font-medium text-ceruleanBlue">
            {item?.brand}
          </p>
          <h2 className="text-base font-semibold text-blackaccent line-clamp-1">
            {item?.title}
          </h2>
          <p className="text-center text-sm line-clamp-2">
            {item?.description}
          </p>
          <div className="flex items-center gap-3 mb-2">
            {/* <Price amount={item?.rowprice} className="text-grayText line-through"/> */}
            <Price amount={item?.price} className="font-bold text-ceruleanBlue"/>
          </div>
        </div>
        <AddToCartButton item={item}/>
    </div>
  )
}

export default ProductCard