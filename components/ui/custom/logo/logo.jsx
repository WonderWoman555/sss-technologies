import Image from 'next/image'
import React from 'react'
import logoImg from '@/assets/site/logo.png'

export const Logo = () => {
    return (
        <Image src={logoImg} alt='logo' width={1000} height={1000} className='w-52' />
    )
}
