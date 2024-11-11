import React from 'react'
import Container from './Container'
import { footerData } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return ( 
    <div className="bg-bgLight py-5 ">
        <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {footerData?.map((item) => (
                <div key={item?._id}>
                    <h3 className="text-ceruleanBlue/90 text-lg font-semibold mb-3 hover:text-limeGreen">
                        {item?.title}
                    </h3>
                    <div className="flex flex-col gap-0.5">
                        {item?.listItem?.map((list) => list?.listData.map((data) => (
                            <Link href="/" key={data} className="py-1 text-blackaccent font-medium hover:navBar ">
                                {data}
                            </Link>
                        )))}
                    </div>
                </div>
            ))}
        </Container>
    </div>
  )
}

export default Footer