"use client";

import { StoreState } from '@/type';
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '@/redux/shopReducer';
import TrolleyLoader from './TrolleyLoader';

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
            <TrolleyLoader title="Processing Payment... Please wait"/>
        </div>
    );
};

export default CheckoutSuccess;