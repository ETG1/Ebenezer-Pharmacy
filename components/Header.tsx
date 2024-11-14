"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from './Container'
import Logo from './Logo';
import SearchBar from './SearchBar';
import { navBarLinks } from '@/constants';
import Link from 'next/link';
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

const Header = () => {
    const { data: session } = useSession()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="sticky z-50 top-0 left-0 w-full h-20 bg-accentWhite border-b-[1px] border-b-grayText/50">
            <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
                <Logo />
                <SearchBar />
                <div className="hidden md:inline-flex items-center gap-7">
                    {navBarLinks?.map((item) => (
                        <Link key={item?.title} href={item?.link} className="navBar">
                            {item?.title}
                        </Link>
                    ))}
                    {session ? (
                        <>
                            <Button
                                onClick={handleLogout}
                                className="bg-ceruleanBlue text-white hover:bg-limeGreen transition-colors duration-300 px-4 py-2 rounded-lg font-semibold"
                            >
                                Logout
                            </Button>
                            <Link 
                                href={"/studio"}
                                className="bg-ceruleanBlue text-white hover:bg-limeGreen transition-colors duration-300 px-4 py-2 rounded-lg font-semibold"
                            >
                                Admin
                            </Link>
                        </>
                    ) : (
                        <Link 
                            href={"/signin"}
                            className="bg-ceruleanBlue text-white hover:bg-limeGreen transition-colors duration-300 px-4 py-2 rounded-lg font-semibold"
                        >
                            Login
                        </Link>
                    )}
                </div>
                <button 
                    onClick={toggleMenu} 
                    className="inline-flex md:hidden cursor-pointer text-3xl navBar"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <CgClose /> : <CgMenuRight />}
                </button>
            </Container>
            
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-accentWhite shadow-lg z-50 flex flex-col p-4"
                    >
                        {navBarLinks?.map((item) => (
                            <Link 
                                key={item?.title} 
                                href={item?.link} 
                                className="navBar py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-300"
                                onClick={toggleMenu}
                            >
                                {item?.title}
                            </Link>
                        ))}
                        {session ? (
                            <>
                                <Button
                                    onClick={() => {
                                        handleLogout();
                                        toggleMenu();
                                    }}
                                    className="bg-ceruleanBlue text-white hover:bg-limeGreen transition-colors duration-300 px-4 py-2 rounded-lg font-semibold mt-4"
                                >
                                    Logout
                                </Button>
                                <Link 
                                    href={"/studio"}
                                    className="bg-ceruleanBlue text-white hover:bg-limeGreen transition-colors duration-300 px-4 py-2 rounded-lg font-semibold mt-2 text-center"
                                    onClick={toggleMenu}
                                >
                                    Admin
                                </Link>
                            </>
                        ) : (
                            <Link 
                                href={"/signin"}
                                className="bg-ceruleanBlue text-white hover:bg-limeGreen transition-colors duration-300 px-4 py-2 rounded-lg font-semibold mt-4 text-center"
                                onClick={toggleMenu}
                            >
                                Login
                            </Link>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
};

export default Header