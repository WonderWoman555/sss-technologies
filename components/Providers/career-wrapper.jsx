'use client'
import React from 'react'
import { CareerBanner } from '../Sections/career/career-banner'
import { ContentWrapper } from '.'
// import { CareerForm } from '../forms'

const CareerWrapper = ({ children, className }) => {
    return (
        <>
            <CareerBanner title={'See Our Job Openings '} />
            <ContentWrapper className={`2xl:px-20 ${className}`}>
                {children}
            </ContentWrapper>
        </>
    )
}

export default CareerWrapper;