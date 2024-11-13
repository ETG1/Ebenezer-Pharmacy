
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from "next/image"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className="hover:scale-105 hoverEffect">
      <h2 className={twMerge("text-2xl font-bold flex items-center ", className)}>
        {/* Logo Image */}
        <Image
            src={"/logo.png"}
            alt={"site logo"}
            width={90}
            height={90}
          />
        <span className="hover:text-ceruleanBlue hoverEffect">Ebenezer</span>
        <span className="hover:text-limeGreen ml-1 hoverEffect">Pharmacy</span>
      </h2>
    </Link>
  )
}

export default Logo


