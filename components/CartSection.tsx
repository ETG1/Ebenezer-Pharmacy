'use client'

import { ProductData } from '@/type'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { resetCart } from '@/redux/shopReducer'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Price from './Price'

interface InitialSession {
  user?: {
    email?: string | null;
  } | null;
}

const CartContainer: React.FC<{ initialSession: InitialSession | null }> = ({ initialSession }) => {
  const cart = useSelector((state: { shop: { cart: ProductData[] } }) => state.shop.cart || []);
  const userInfo = useSelector((state: { shop: { userInfo: { id: string; name: string; email: string } | null } }) => state.shop.userInfo);
  const dispatch = useDispatch();
  const [totalAmt, setTotalAmt] =useState(0)

  const handleResetCart = () => {
    const confirm = window.confirm("Are you sure you want to clear cart?");
    if (confirm) {
      dispatch(resetCart());
      toast.success("Cart cleared successfully");
    }
  };

  useEffect(() => {
    let price = 0;
    if (cart) {
        cart.forEach((item) => {
            price += item?.price * item?.quantity;
        });
    }
    setTotalAmt(price);
}, [cart]);

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        email: initialSession?.user?.email ?? null,
      }),
    });
    const {url} = await response.json();
    if (url){
      window.location.href = url
    }
    
    toast.success("Nice!");
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#f5f5f5] text-blackaccent hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold rounded-lg shadow-lg">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-4">
            {cart.map((item: ProductData) => (
              <CartItem key={item._id} cart={cart} item={item} />
            ))}
          </div>
          <button 
            className="py-2 px-10 bg-brightRed text-white font-semibold rounded-md hover:bg-brightRed/80 hoverEffect" 
            onClick={handleResetCart}
          >
            Clear Cart
          </button>
          <div className="max-w-7xl flex justify-end">
            <div className="w-96 flex flex-col gap-4 ">
              <div className="rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-right">Cart Total</h1>
                <div>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 px-4 text-lg font-medium rounded-lg">
                    Subtotal <Price amount={totalAmt}/>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 px-4 text-lg font-medium rounded-lg">
                    Shipping Cost <Price amount={0}/>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 px-4 text-lg font-medium rounded-lg">
                    Total <Price amount={totalAmt}/>
                  </p>
                </div>
              </div>
              {initialSession?.user ? (
                <button onClick={handleCheckout} className="flex items-center justify-center bg-ceruleanBlue text-white hover:bg-limeGreen hoverEffect px-8 py-3 rounded-lg font-semibold">
                  Proceed to checkout
                </button>
              ) : (
                <button disabled className="flex items-center justify-center bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold cursor-not-allowed">
                  Proceed to checkout (Login required)
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="flex items-center justify-center py-20">
          <div className="max-w[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center rounded-lg shadow-lg">
            <h1 className="text-xl font-bold uppercase">
              🛒 Your cart is feeling a little empty😢
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              It's ready and waiting to be filled with exciting finds! Give it a mission—add some goodies and let the adventure begin!
            </p>
            <Link href={"/shop"} className="bg-ceruleanBlue text-white hover:bg-limeGreen hoverEffect px-8 py-3 rounded-lg font-semibold">
              Continue shopping 
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartContainer;