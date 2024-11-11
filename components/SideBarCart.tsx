"use client";
import { ProductData } from '@/type';
import Link from 'next/link';
import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { useSelector } from 'react-redux';

const SideBarC = () => {
  // Access `cart` from `state.shop`
  const cart = useSelector((state: { shop: { cart: ProductData[] } }) => state.shop.cart || []);

  return (
    <div className="fixed top-[450px] right-2 z-20 flex flex-col gap-2">
      <Link href={"/cart"} className="bg-accentWhite w-16 h-[72px] rounded-xl flex flex-col gap-1 text-blackaccent justify-center items-center shadow-md shadow-ceruleanBlue hover:shadow-limeGreen
       hoverEffect">
        <div>
          <GiShoppingCart className="text-2xl"/>
        </div>
        <p className="text-xs font-semibold">Cart</p>
        <p className="absolute top-1 right-2 bg-blackaccent text-white w-4 h-4 rounded-full flex items-center justify-center font-semibold text-xs">
          {cart.length}
        </p>
      </Link>
    </div>
  );
};

export default SideBarC;
