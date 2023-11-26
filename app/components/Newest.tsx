import React from 'react';
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import Link from 'next/link';

async function getData() {
  const query = `
    *[_type == 'product'][0...4] | order(_createdAt desc) {
    _id,
      price,
    name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct = await getData();

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Our Newest Products</h2>
          <Link href="/all">See all</Link>
        </div>
      </div>
    </div>
  )
}
