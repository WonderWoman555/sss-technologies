import React from 'react'

export const Container = ({ children }) => {
    return (
        <div className='2xl:px-32 xl:px-11 lg:px-11 sm:px-8 px-4 w-full h-full sm:bg-hero bg-no-repeat bg-bottom bg-mute'>
            {children}
        </div>
    )
}
