import React from 'react'

export const Description = ({ children, className }) => {
    return (
        <p className={`${className} text-gray-400 sm:text-base text-sm`}>{children}</p>
    )
}
