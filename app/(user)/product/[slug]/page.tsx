import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/Container';
import Price from '@/components/Price';
import ProductCard from '@/components/ProductCard';
import { getBestSellerData } from '@/lib/getData';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { ProductData } from '@/type';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { MdStar } from 'react-icons/md';

export const dynamicParams = true;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const query = groq`*[_type == "product" && slug.current == $slug][0]{ title, description }`;
  const product = await client.fetch(query, { slug });

  return {
    title: product?.title,
    description: product?.description,
  };
}

export default async function IndividualProductPage({ params }: Props) {
  const { slug } = params;
  const query = groq`*[_type == "product" && slug.current == $slug][0]{ ... }`;
  const product: ProductData = await client.fetch(query, { slug });
  const bestSellerData: ProductData[] = await getBestSellerData();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className="my-10 bg-grayText/20 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full p-4">
        <div className="h-full xl:col-span-2">
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-full object-contain rounded-lg"
          /> 
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-4xl font-semibold">
              {product.title}
            </h2>
            <div>
              <Price amount={product.price} className="text-lg font-bold text-ceruleanBlue"/>
            </div>
            <div className="flex items-center gap-3">              
              <div className="text-base text-grayText flex items-center">
                {Array.from({ length: 5 }).map((_, index) => {
                  const filled = index + 1 <= Math.floor(product.ratings || 0);
                  const halfFilled = index + 1 > Math.floor(product.ratings || 0) && index < Math.ceil(product.ratings || 0);
                  return (
                    <MdStar key={index} className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-yellow-200" : "text-grayText"}`} />
                  );
                })}
              </div>
              <p className="text-sm font-semibold text-blackaccent/60 tracking-wide ">
                (12 customers review)
              </p>
            </div>
            <p className="text-sm tracking-wide text-gray-600">
              {product.description}
            </p>
            <AddToCartButton item={product} className="rounded-full py-2" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {bestSellerData.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
}