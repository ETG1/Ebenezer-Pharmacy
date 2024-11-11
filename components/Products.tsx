import { getProductData } from '@/lib/getData'
import { ProductData } from '@/type'
import React from 'react'
import ProductCard from './ProductCard';

const Products = async() => {
  const products: ProductData[] =await getProductData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products?.map((item) => (
        <ProductCard key={item?._id} item={item}/>
      ))}
    </div>
  )
}

export default Products