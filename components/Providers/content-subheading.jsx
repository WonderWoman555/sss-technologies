import React from 'react'

export const ContentHeading = ({ children, className }) => {
  return (
    <div className={`${className}  sm:w-full w-11/12 sm:text-left text-center flex lg:justify-normal sm:justify-normal items-center justify-center`}>{children}</div>
  )
}
