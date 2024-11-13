"use client";

import { StoreState } from '@/type';
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '@/redux/shopReducer';
import TrolleyLoader from './TrolleyLoader';
import { HiCheckCircle, HiHome } from "react-icons/hi2";
import Link from 'next/link';
import { FaBox } from 'react-icons/fa6';
import { IoIosPhonePortrait } from 'react-icons/io';

const CheckoutSuccess = ({ id }: { id: string }) => {
    const { cart } = useSelector((state: StoreState) => state?.users || {});
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const [totalAmt, setTotalAmt] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let price = 0;
        if (cart) {
            cart.forEach((item) => {
                price += item?.price * item?.quantity;
            });
        }
        setTotalAmt(price);
    }, [cart]);

    const handleSaveOrder = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/saverorder ", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  cart,
                  email: session?.user?.email as string,
                  id: id,
                  totalAmt
                }),
              });
              const data = await response.json()
              if (data?.success) {
                setLoading(false)
                dispatch(resetCart())
              }
        } catch (error) {
            console.log("Error", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (session?.user && cart?.length) {
            handleSaveOrder
        }
    }, [session?.user, cart?.length])

    console.log(totalAmt);

    return (
        <div>
            {loading ? ( <TrolleyLoader title="Processing Payment... Please wait"/>) : (
                <div className="bg-gradient-to-b from-limeGreen/60 to-ceruleanBlue/15 flex items-center justify-center px-4 py-28">
                    <div className="max-w-md w-full space-y-8 text-center">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-green-200 rounded-full">
                                </div>
                        </div>
                                    <div className="relative">
                                        <HiCheckCircle className="mx-auto w-24 h-24 text-green-500"/>
                                    </div>
                            </div>
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                                Success!
                            </h2>
                            <p className="text-sm mt-2 text-gray-600">
                                Successfully Paid
                            </p>
                            <p className="text-base text-gray-700">
                                Thank you for your submission. We&apos;ve recieved your information and will process it shortly. you should recieve a confirmation email shorty.
                            </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href={"/"}>
                                <button className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-500/60 text-white font-semibold rounded-lg shadow-md hoverEffect transform hover:-translate-y-1">
                                    <HiHome className="mr-2 h-5 w-5"/>
                                    Home
                                </button>
                            </Link>
                            <Link href={"/"}>
                                <button className="inline-flex items-center px-4 py-2 bg-ceruleanBlue hover:bg-ceruleanBlue/60 text-white font-semibold rounded-lg shadow-md hoverEffect transform hover:-translate-y-1">
                                    <FaBox className="mr-2 h-5 w-5"/>
                                    Orders
                                </button>
                            </Link>
                            <Link href={"/"}>
                                <button className="inline-flex items-center px-4 py-2 bg-blackaccent hover:bg-blackaccent/60 text-white font-semibold rounded-lg shadow-md hoverEffect transform hover:-translate-y-1">
                                <IoIosPhonePortrait className="mr-2 h-5 w-5"/>
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutSuccess; 