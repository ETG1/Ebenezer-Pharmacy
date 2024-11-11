// Logo.tsx
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className="hover:scale-105 hoverEffect">
      <h2 className={twMerge("text-2xl font-bold flex items-center ", className)}>
        {/* Logo Image */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 h-24 mr-[-16]"
        />
        <span className="hover:text-ceruleanBlue hoverEffect">Ebenezer</span>
        <span className="hover:text-limeGreen ml-1 hoverEffect">Pharmacy</span>
      </h2>
    </Link>
  )
}

export default Logo
