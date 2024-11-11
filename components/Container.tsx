import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className}: props) => {
  return (
    <div className={twMerge("max-w-screen-xl mx-auto px-2", className)}>
      {children}
    </div>
  )
}

export default Container