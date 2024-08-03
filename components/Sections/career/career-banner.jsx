import Image from 'next/image'
import React from 'react'

const CareerBanner = ({ title })=> {
    return (
        <div className='w-screen h-[50vh] bg-gray-950 relative -z-10 scroll-smooth'>
            <Image src={'https://raw.githubusercontent.com/anujnema5/sixpl/main/public/images/career/careerBanner.jpg'} width={500} alt='career' height={700} className='object-cover bg-no-repeat w-[100%] h-[100%]' />

            <div className='absolute w-full h-full bg-black/60 top-0 left-0 flex flex-col items-center justify-center gap-5'>

                <h1 className='text-white lg:text-5xl text-4xl my-0'><span className='text-indigo-500'>SSS</span></h1>

                <h2 className='my-0 text-white/90 font-bold lg:text-3xl text-xl'>{title}<span className='text-red-500'>@ SSS</span> </h2>

            </div>
        </div>
    )
}

export { CareerBanner }