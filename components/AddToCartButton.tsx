"use client";
import { addtocart } from '@/redux/shopReducer';
import { ProductData } from '@/type'
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { twMerge } from 'tailwind-merge';

interface Props {
    item: ProductData;
    className?: string; 
}

const AddToCartButton = ({item, className}: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addtocart(item));
    toast.success(`${item?.title.substring(0, 14)}... added successfully`)
  }
  return (
    <button onClick={handleAddToCart} className={twMerge("bg-blackaccent text-accentWhite w-full py-2 border border-px border-blackaccent hover:bg-limeGreen hover:border-ceruleanBlue hoverEffect font-semibold tracking-wide flex items-center justify-center gap-1", className)}>
        Add to cart
    </button>
  )
}

export default AddToCartButton