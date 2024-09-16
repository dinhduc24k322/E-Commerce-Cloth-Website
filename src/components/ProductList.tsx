import Link from 'next/link'
import Image from "next/image";
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className='relative w-full h-80'>
            <Image 
                src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
            />
            <Image 
                src="https://i.pinimg.com/564x/18/cf/84/18cf8467cd4747df237cb24f8f9aef6a.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md'
            />
            </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>My Description</div>
            <button className='rounded-2xl ring-1 ring-vintage text-vintage w-max py-2 px-4 text-xs hover:bg-vintage hover:text-white'>Add to Cart</button>
        </Link>
        <Link href="/test" className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className='relative w-full h-80'>
            <Image 
                src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
            />
            <Image 
                src="https://i.pinimg.com/564x/18/cf/84/18cf8467cd4747df237cb24f8f9aef6a.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md'
            />
            </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>My Description</div>
            <button className='rounded-2xl ring-1 ring-vintage text-vintage w-max py-2 px-4 text-xs hover:bg-vintage hover:text-white'>Add to Cart</button>
        </Link>
        <Link href="/test" className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className='relative w-full h-80'>
            <Image 
                src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
            />
            <Image 
                src="https://i.pinimg.com/564x/18/cf/84/18cf8467cd4747df237cb24f8f9aef6a.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md'
            />
            </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>My Description</div>
            <button className='rounded-2xl ring-1 ring-vintage text-vintage w-max py-2 px-4 text-xs hover:bg-vintage hover:text-white'>Add to Cart</button>
        </Link>
        <Link href="/test" className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className='relative w-full h-80'>
            <Image 
                src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
            />
            <Image 
                src="https://i.pinimg.com/564x/18/cf/84/18cf8467cd4747df237cb24f8f9aef6a.jpg" 
                alt="" 
                fill sizes="25vw"
                className='absolute object-cover rounded-md'
            />
            </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>My Description</div>
            <button className='rounded-2xl ring-1 ring-vintage text-vintage w-max py-2 px-4 text-xs hover:bg-vintage hover:text-white'>Add to Cart</button>
        </Link>
    </div>
  )
}

export default ProductList