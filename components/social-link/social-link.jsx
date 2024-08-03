import Link from 'next/link';
import React from 'react'

export const SocialLink = ({ icon }) => (
    <Link
        href="#"
        className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transform hover:scale-109 hover:bg-white hover:border-primary hover:text-primary transition-colors duration-500"
    >
        <i className={`fab fa-${icon} text-white p-6 fa-xl transition-colors duration-500 hover:text-primary`}></i>
    </Link>
);