"use client";

import { StoreState } from '@/type';
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';

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

    console.log(totalAmt);

    return (
        <div>CheckoutSuccess</div>
    );
};

export default CheckoutSuccess;
