import { addQuantity, minusQuantity, removeFromCart } from '@/redux/shopReducer';
import { urlFor } from '@/sanity/lib/image';
import { ProductData } from '@/type'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import Price from './Price';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface Props {
    cart:ProductData[];
    item:ProductData;
}

const CartItem = ({cart, item}: Props) => {
  const [existingProduct, setExistingProduct] = useState<ProductData | null>(null);
  const dispatch = useDispatch();
  useEffect (() => {
    const availableProduct = cart?.find((product) => product?._id === item._id);
    if (availableProduct){
      setExistingProduct(availableProduct);
    }
  },[cart, item])
  const hundleMinus = () => {
    if((existingProduct?.quantity as number)>1){
      dispatch(minusQuantity(item._id))
      toast.success("-1 Removed")
    }else{
      toast.error("Quantity can not be zero")
    }
  };
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
        <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
        <IoTrashOutline  className="text-blackaccent hover:text-brightRed cursor-pointer hoverEffect" 
        onClick={() => {dispatch(removeFromCart(item?._id)); toast.success(`${item?.title.substring(0, 12)} ... Deleted from cart`)}}
        />
        <Link href={`/product/${item?.slug.current}`}>
          <Image src={urlFor(item?.image).url()} alt={item?.title} width={200} height={200} className="w-32 h-32 object-contain rounded-xl"/>
        </Link>
        <h1 className="font-semibold">{item?.title.substring(0, 20)}</h1>
        </div>
        <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 px-4 md:py-4 lg:px-0">
          <p className="flex w-1/3 items-center text-lg font-semibold">
            <Price amount={item?.price}/>
          </p>
          <div className="w-1/3 flex items-center gap-6 text-lg">
            <span className="w-6 h-6 bg-gray-50 text-sm flex items-center justify-center cursor-pointer border-[1px] border-bgLight hover:border-brightRed hoverEffect rounded-md" onClick={hundleMinus}>
              <FaMinus/>
            </span>
            <p className="text-sm font-semibold">{item?.quantity}</p>
            <span className="w-6 h-6 bg-gray-50 text-sm flex items-center justify-center cursor-pointer border-[1px] border-bgLight hover:border-limeGreen hoverEffect rounded-md" onClick={() => {
              dispatch(addQuantity(item?._id));
              toast.success("+1 Added")
            }}>
              <FaPlus/>
            </span>
          </div>
          <div className="w-1/3 flex items-center font-bold text-lg">
          <Price amount={item?.quantity * item?.price}/>
          </div>
        </div>
    </div>
  )
}

export default CartItem