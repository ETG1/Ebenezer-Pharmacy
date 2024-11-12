import { auth } from '@/auth'
import Container from '@/components/Container'
import { BiSolidLogOut } from "react-icons/bi";
import Image from 'next/image'
import React from 'react'

const MyProfilePage = async () => {
  const session = await auth();
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-semibold">
        Welcome to your Dashboard
      </h2>
      <div className="flex items-center gap-3 my-5">
        <Image src={session?.user?.image as string } alt='userImage' width={200} height={200} className="w-10 h-10 rounded-full"/>
        <div >
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
        <div>
        </div>
          <form action="" >
          <button type='submit' className=" border border-gray-400 px-4 py-2 text-sm font-semibold rounded-md flex items-center justify-center gap-1 hover:text-brightRed hoverEffect">
          <BiSolidLogOut className=" text-xl" />
          Sign Out
          </button>
        </form>
      </div>
    </Container>
  )
}

export default MyProfilePage