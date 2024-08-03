'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { CustomButton } from '../ui/custom/Button/custom-button'
import { NavLinks } from './nav-links'
import { Menu } from 'lucide-react'
import { navLinksData } from '@/data/nav-links'
import { Icon } from '../ui'
import Link from 'next/link'
import Logo from '@/assets/site/logo.png'
import Image from 'next/image'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className="w-full lg:block flex flex-col sticky top-0 left-0">
      <div className="flex w-full items-center justify-between 2xl:px-32 xl:px-11 lg:px-11 sm:px-8 px-6 py-7 ">
        <div className="logo">
          <h1 className="lg:text-3xl text-xl font-bold cursor-pointer">
            <Image src={Logo} alt='logo' width={1000} height={1000} className='w-52'/>
          </h1>
        </div>

        <div className="links hidden lg:block">
          <NavLinks />
        </div>

        <Link href={'/contact'} className="consult hidden lg:block">
          <CustomButton>Free Consultation</CustomButton>
        </Link>

        <div
          className="lg:hidden inline-block cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Menu />
        </div>
      </div>

      <div className="relative w-full !z-[9999999999999999999]">
        <nav
          role="navigation z-[99999999999999999] absolute"
          className={`bg-primary lg:hidden block transition-all absolute w-full 
            duration-500 max-h-0 overflow-y-hidden
            ${menuOpen &&
            "transition-all max-h-96 border-b min-h-full border-gray-800"
            }`}
        >
          <ul className="flex flex-col gap-7 text-sm px-5 py-5">
            {navLinksData?.map((link, index) => {
              if (link.type === "dropdown") {
                return (
                  <div
                    onClick={() => setIsRotated((prev) => !prev)}
                    className=" focus-within:border-2 text-white group "
                    key={index}
                  >
                    <div className="flex items-center justify-between">
                      {link.title}
                      <Icon.ChevronDown
                        className={`w-4 h-4 transition-transform duration-500 ${isRotated ? "rotate-180" : ""
                          }`}
                      />
                    </div>

                    <div
                      key={index}
                      className={`w-full max-h-0 transition-all  duration-500 overflow-hidden 
                      ${isRotated && "max-h-96 py-5"}`}
                    >
                      <ul className="flex flex-col gap-5 ">
                        {link.links?.map((link, i) => (
                          <li className="" key={i} onClick={()=>setMenuOpen(false)}>
                            <Link href={link.href}>{link.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else {
                return (
                  <li
                    key={index}

                    className={`${link.special && " text-lg font-semibold"
                      } text-sm text-white `}
                  >
                    <Link className='' onClick={()=>setMenuOpen(false)} href={link.url}>
                      {link.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
