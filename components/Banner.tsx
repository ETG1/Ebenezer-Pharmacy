import { getBannerData } from '@/lib/getData'
import React from 'react'
import Container from './Container';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { BannerData } from '@/type';
import Price from './Price';

const Banner = async() => {
  const banner = await getBannerData();
  const singleBanner = banner[0];

  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]">
        <div className="md:col-span-2 bg-bgLight relative flex items-end justify-end rounded-lg overflow-hidden group">
            <Image src={urlFor(singleBanner?.image).url()} alt={singleBanner?.title} width={820} priority height={600} className="rounded-lg object-contain h-full md:h-full max-h-[600px] self-end group-hover:scale-105 hoverEffect group"/>
            <div className="h-full z-10 absolute left-10 top-0 flex flex-col justify-center isolate gap-5 md:gap-10">
                <div className="flex flex-col gap-1 md:gap-3 bg-blackaccent/45 px-2 py-2 rounded-xl">
                    {/* <button className="bg-limeGreen text-white rounded-full w-28 py-2 px-2 text-sm hover:bg-limeGreen/80 hoverEffect">
                        Sale 20%off{singleBanner?.price}
                    </button> */}
                    <p className="text-xl md:text-3xl font-semibold text-accentWhite">{singleBanner?.title}</p>
                    <h2 className="text-2xl md:text-6xl font-bold text-accentWhite">{singleBanner?.subtitle}</h2>
                    <p className="text-xs md:text-lg font-medium max-w-45 text-accentWhite">{singleBanner?.description}</p>
                </div>
                <Link href={"/shop"}> 
                    <button className="bg-ceruleanBlue text-white rounded-xl w-28 py-2 px-2 text-sm hover:bg-ceruleanBlue/80 hoverEffect font-semibold">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
        <div className="flex flex-col space-y-5 md:space-y-10 h-auto md:h-[460px]">
            {banner.slice(1,3).map((item:BannerData) => (
                <div key={item?._id} className="h-full md:h-[230px] bg-bgLight rounded-lg overflow-hidden flex justify-center items-center p-5  group">
                    <div className="flex flex-col w-1/2">
                        <div>
                            <p className="text-2xl font-semibold">{item?.title}</p>
                            <p className="text-3xl font-bold">{item?.subtitle}</p>
                        </div>
                        <p className="mt-3 font-medium text-black/60">
                            from <Price amount={item?.price} className="text-brightRed font-bold"/>
                        </p>
                        <Link href={"/shop"} className="mt-5 hoverEffect hover:text-brightRed">
                            Shop Now!
                        </Link>
                    </div>
                    <Image
                        src={urlFor(item?.image).url()}
                        alt={item?.title} width={500} priority height={500}
                        className="object-contain rounded-lg h-72 md:h-60 w-1/2 group-hover:scale-105 hoverEffect"
                    />
                </div>
            ))}
        </div>
    </Container>
  );
};

export default Banner 