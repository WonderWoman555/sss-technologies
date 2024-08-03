import React from 'react'

export const ContentWrapper = ({ children, className }) => {
    return (
        <section className={`${className} 2xl:px-32 xl:px-11 lg:px-11 sm:px-8 px-4 2xl:py-16 xl:py-11 lg:py-11 sm:py-10 py-6 w-full h-full flex flex-col  gap-0 sm:items-start items-center justify-center`}>
            {children}
        </section>
    )
}
