import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import Google from '@/public/google.png'
import Facebook from '@/public/facebook.png'
import Tiktok from '@/public/tik-tok.png'
import { auth, signIn } from '@/auth'
import { redirect } from 'next/navigation'


const SignInPage = async () => {
  const session= await auth();
  if (session?.user){
    redirect("/");
  }
  return (
    <Container className="py-20 flex flex-col justify-center items-center gap-6">
        <form action={async () => {"use server"; await signIn("tiktok", {redirectTo: "/"});}} className="flex items-center gap-1 border border-ceruleanBlue font-semibold bg-blue-50 px-4
         py-1.5 rounded-md hover:bg-ceruleanBlue/50 hover:text-white hoverEffect">
            <Image src={Tiktok} alt='google-image' className="w-8"/>
            <button>signin with Tiktok</button>
        </form>
        <form action={async () => {"use server"; await signIn("google", {redirectTo: "/"});}} className="flex items-center gap-1 border border-ceruleanBlue font-semibold bg-blue-50 px-4
         py-1.5 rounded-md hover:bg-ceruleanBlue/50 hover:text-white hoverEffect">
            <Image src={Google} alt='google-image' className="w-8"/>
            <button>signin with Google</button>
        </form>
        <form action={async () => {"use server"; await signIn("facebook", {redirectTo: "/"});}} className="flex items-center gap-1 border border-ceruleanBlue font-semibold bg-blue-50 px-4
         py-1.5 rounded-md hover:bg-ceruleanBlue/50 hover:text-white hoverEffect">
            <Image src={Facebook} alt='google-image' className="w-8"/>
            <button>signin with Facebook</button>
        </form>
    </Container>
  )
}

export default SignInPage