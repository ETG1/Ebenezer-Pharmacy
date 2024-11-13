"use client";
import CheckoutSuccess from '@/components/CheckoutSuccess';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {
    searchParams: {
        session_id: string | null;
    };
}

const SuccessPage = ({ searchParams }: Props) => {
    const { session_id } = searchParams;

    useEffect(() => {
        if (!session_id) {
            redirect("/");
        }
    }, [session_id]);

    return (
        <div>
            <CheckoutSuccess id={session_id} />
        </div>
    );
};

export default SuccessPage;
