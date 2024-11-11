import Link from 'next/link'
import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { GiShoppingCart } from 'react-icons/gi'
import { LuUser2 } from 'react-icons/lu'

const SideBarP = () => {
  return (
    <div className="fixed top-[350px] right-2 z-20 flex flex-col gap-2">
        <Link href={"/signin"} className="bg-accentWhite w-16 h-[72px] rounded-xl flex flex-col gap-1 text-blackaccent justify-center items-center shadow-md shadow-ceruleanBlue hover:shadow-limeGreen hoverEffect">
            <div>
                <LuUser2 className="text-2xl"/>
            </div>
            <p className="text-xs font-semibold">Profile</p>
        </Link>
    </div>
  )
}

export default SideBarP