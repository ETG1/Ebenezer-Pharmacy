import CheckoutSuccess from '@/components/CheckoutSuccess';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props  {
    SearchParams: {
        session_id: string | null;
    };
}

const SuccessPage = async ({SearchParams}: Props) => {
    const id = await SearchParams?.session_id;
    if (!id) {
        redirect("/");
    }
    
  return (
    <div>
        <CheckoutSuccess id={id}/>
    </div>
  )
}

export default SuccessPage