import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    amount: number;
    className?: string;
}

const Price = ({ amount, className }: Props) => {
  const priceFormat = new Number(amount).toLocaleString("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
  });
  return (
    <span className={twMerge("text-base font-semibold", className)}>
        {priceFormat}
    </span>
  )
}

export default Price