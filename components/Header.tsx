"use client";
import React from 'react'
import Container from './Container'
import Logo from './Logo';
import SearchBar from './SearchBar';
import { navBarLinks } from '@/constants';
import Link from 'next/link';
import { CgMenuRight } from "react-icons/cg";
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

const Header = () => {
    const { data: session } = useSession()

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }

  return (
    <header className=" sticky z-50 top-0 left-0 w-full h-20 bg-accentWhite border-b-[1px] border-b-grayText/50 ">
      <Container className="h-full flex items-center justify-between gap-5 lg:gap-10 ">
        <Logo />
        <SearchBar/>
        <div className="hidden md:inline-flex items-center gap-7">
          {navBarLinks?.map((item) => (
            <Link key={item?.title} href={item?.link} className="navBar">
              {item?.title}
            </Link>
          ))}
          {session ? (
            <>
                <Link
                    href={""}
                    onClick={handleLogout}
                    className="bg-ceruleanBlue text-white hover:bg-limeGreen hoverEffect px-6 py-2 rounded-lg font-semibold"
                >
                    Logout
                </Link>
                <Link 
                    href={"/studio"}
                    className="uppercase text-limeGreen hover:text-ceruleanBlue font-semibold duration-300 cursor-pointer"
                >
                    Admin
                </Link>
            </>
        ) : (
            <Link 
                href={"/signin"}
                className="bg-ceruleanBlue text-white hover:bg-limeGreen hoverEffect px-6 py-2 rounded-lg font-semibold"
            >
                Login
            </Link>
        )}
          
        </div>
        <CgMenuRight className="inline-flex md:hidden cursor-pointer text-3xl navBar"/>
      </Container>
    </header>
  )
};

export default Header



