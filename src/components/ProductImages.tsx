"use client";

import React, { useState } from 'react'
import Image from "next/image";

const images = [
    {
        id: 1,
        url: "https://i.pinimg.com/564x/40/51/c6/4051c69f66621cc690e6b3237456d690.jpg",
    },
    {
        id: 2,
        url: "https://i.pinimg.com/564x/75/7e/57/757e57d2d2a54792d06976eb2f83a33e.jpg",
    },
    {
        id: 3,
        url: "https://i.pinimg.com/736x/84/7b/f5/847bf5c978f52645f940f8888189545a.jpg",
    },
    {
        id: 4,
        url: "https://i.pinimg.com/736x/ba/01/a7/ba01a75041389d55b56523fdaef8be74.jpg",
    },
];

const ProductImages = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className=''>
            <div className='h-[500px] relative'>
                <Image 
                    src={images[index].url}
                    alt="" 
                    fill 
                    sizes="50vw" 
                    className="object-cover rounded-md"
                />
            </div>
            <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
                {images.map((img, i) => (
                    <div 
                        className='w-1/4 h-32 relative gap-4 mt-8' 
                        key={img.id} 
                        onClick={() => setIndex(i)}

                        >
                    <Image 
                            src= {img.url} 
                            alt="" 
                            fill 
                            sizes="30vw" 
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div> 
  )
}

export default ProductImages