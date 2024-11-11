import Link from 'next/link'
import React from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import Logo from './Logo'

const StudioHeader = (props: any) => {
  return (
    <div>
      <div className="bg-blackaccent text-gray-100 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-3 font-semibold hover:text-ceruleanBlue hoverEffect">
          <IoReturnDownBack className="text-3xl"/> Go to website
        </Link>
        <Logo className="text-white"/>
        <p className="hidden md:inline-flex text-sm px-2">Admin panel </p>
      </div>
      {props.renderDefault(props)}
    </div>
  )
}

export default StudioHeader