"use client";

import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface imageProps {
  images:any
}

export default function ImageGallery({ images }: imageProps) {
  const [ bigImage, setBigImage ] = useState(images[0]);

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
            className="h-full w-full object-cover object-center cursor-pointer"
          />
        </div>
      )) }
    </div>

    {/* View for big images */}
    <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 hover:opacity-75">
      <Image
        src={urlFor(bigImage).url()}
        alt="Selected Image large preview"
        width={500}
        height={500}
        className="h-full w-full object-cover object-center"
      />
    </div>
  </div>
  )
}
