
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from "next/image"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className="hover:scale-105 transition-transform duration-200">
      <h2 className={twMerge("text-2xl font-bold flex items-center", className)}>
        {/* Logo Image */}
        <Image
          src="/logo.png"
          alt="Ebenezer Pharmacy logo"
          width={90}
          height={90}
          priority
          unoptimized
        />
        <span className="hover:text-ceruleanBlue transition-colors duration-200">Ebenezer</span>
        <span className="hover:text-limeGreen ml-1 transition-colors duration-200">Pharmacy</span>
      </h2>
    </Link>
  )
}

export default Logo

