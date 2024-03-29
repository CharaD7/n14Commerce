"use client";

import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface imageProps {
  images:any
}

export default function ImageGallery({ images }: imageProps) {
  const [ bigImage, setBigImage ] = useState(images[0]);

  const handleSmallImageClick = ( image: any ) => {
    setBigImage(image);
  };

  return (
  <div className="grid gap-4 lg:grid-cols-5">

    {/* View for all images */}
    <div className="order-last flex gap-4 lg:order-none lg:flex-col">
      { images.map((image: any, idx: any) => (
        <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={urlFor(image).url()}
            width={200}
            height={200}
            alt="photo"
            className="h-full w-full object-cover object-center cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-75 hover:opacity-75"
            onClick={() => handleSmallImageClick( image )}
          />
        </div>
      )) }
    </div>

    {/* View for big images */}
    <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
      <Image
        src={urlFor(bigImage).url()}
        alt="Selected Image large preview"
        className="h-full w-full object-cover object-center"
        width={500}
        height={500}
      />

      {/* Sale banner */}
      <span className="absolute left-0 top-0 rounded-br-lg bg-green-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
    </div>
  </div>
  )
}
