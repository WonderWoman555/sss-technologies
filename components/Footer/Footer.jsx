import React from 'react'
import { Heading } from '../Heading'
import { Description } from '../Description'
import { footerNavLinks } from '@/data/sections'
import { Logo } from '../ui/custom/logo'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='w-full bg-mute flex flex-col gap-5 px-5 sm:px-10 lg:px-16'>
            <div className="names-and-links lg:pt-14 pt-10 flex lg:flex-row flex-col gap-5 justify-between border-b lg:pb-5">
                <div className="flex flex-col lg:gap-5 gap-3 ">
                    {/* <h3 className='lg:text-3xl text-2xl font-bold'>LOGO</h3> */}
                    <Logo />
                    <Description>Simple, Smart Solutions</Description>

                    <div className="flex flex-col gap-3">
                        <h4 className='lg:text-xl text-lg font-semibold'>Sales@ssstechies.Com</h4>
                        <Link href={'tel:9131823248'}>
                            <h4 className='lg:text-xl text-lg font-semibold'>(+91) 913 18 23248</h4>
                        </Link>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-5 lg:justify-around sm:justify-between items-start">
                    {footerNavLinks.map((section, index) => (
                        <div key={index} className="text-left lg:pl-20 flex flex-col gap-1">
                            <h3 className="lg:text-xl text-lg font-[600] mb-4 text-gray-900">
                                {section.title}</h3>
                            <ul className="list-none p-0 m-0 flex flex-col gap-2">
                                {section.links.map((link, linkIndex) => (
                                    <Link target='' key={linkIndex} href={link.href}>
                                        <li  className="text-gray-400 mb-2 sm:text-sm text-sm">{link.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="genuine-footer lg:py-5 text-dark-mute flex lg:flex-row flex-col lg:gap-10 
            gap-3 justify-between mb-7 lg:mb-3 sm:text-left text-center text-sm lg:text-base">
                <div className="">Copyright © 2024 SSS Technologies. All rights reserved.</div>
                <div className="flex lg:gap-8 lg:text-base gap-5 text-center sm:justify-start justify-center text-sm">
                    {/* <span>Privacy Policy</span> */}
                    {/* <span>Terms Of Services</span> */}
                    {/* <span>Go To Top</span> */}
                </div>
            </div>
        </div>
    )
}
