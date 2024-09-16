import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image 
                        src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                        alt="" 
                        fill sizes="" 
                        className="object-cover"
                    />
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image 
                        src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                        alt="" 
                        fill sizes="" 
                        className="object-cover"
                    />
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image 
                        src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                        alt="" 
                        fill sizes="" 
                        className="object-cover"
                    />
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image 
                        src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                        alt="" 
                        fill sizes="" 
                        className="object-cover"
                    />
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image 
                        src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                        alt="" 
                        fill sizes="" 
                        className="object-cover"
                    />
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image 
                        src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                        alt="" 
                        fill sizes="" 
                        className="object-cover"
                    />
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image 
                        src="https://i.pinimg.com/564x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" 
                        alt="" 
                        fill sizes="" 
                        className="object-cover"
                    />
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList