import React from 'react'
import { FaCcMastercard, FaClockRotateLeft, FaHeadset } from 'react-icons/fa6';
import { GoRocket } from 'react-icons/go';

const data = [
    {
        title: "Free Delivery",
        description: "Orders above R350",
        icon: <GoRocket/>
    },
    {
        title: "60 Days Return",
        description: "Money back if not satisfied",
        icon: <FaClockRotateLeft/>
    },
    {
        title: "Secure Payment",
        description: "100% Secure payment",
        icon: <FaCcMastercard/>
    },
    {
        title: "Support 24/7",
        description: "Dedicated support",
        icon: <FaHeadset />
    },
];

const Credibility = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
        {data?.map((item) => (
            <div key={item?.title} className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-3xl text-ceruleanBlue">{item?.icon}</span>
                <div className="text-center sm:text-left">
                    <h2 className="uppercase font-bold">{item?.title}</h2>
                    <p className="text-sm text-grayText">{item?.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Credibility