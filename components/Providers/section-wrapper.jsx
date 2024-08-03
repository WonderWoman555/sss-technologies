// import React from 'react'
// import { Heading } from '@/components/Heading'
// import { ContentHeading, ContentWrapper } from '@/components/Providers'
// import { Button } from '../ui/button'
// import { CustomButton } from '../ui/custom/Button/custom-button'
// import { Description } from '../Description'

// export const Section = ({ children, subHeading, heading, buttonText, bgMute, link, description = "" }) => {
//     return (
//         <ContentWrapper className={`${bgMute && " bg-mute"}`}>
//             <ContentHeading>
//                 <Heading style="text-primary lg:text-xl my-0">{subHeading}</Heading>
//             </ContentHeading>

//             {link ?

//                 <div className="flex sm:flex-row flex-col w-full justify-between items-center">
//                     <ContentHeading>
//                         <Heading heading={'h1'} style={'2xl:w-10/12 lg:w-8/12 w-full '}>{heading}</Heading>
//                     </ContentHeading>

//                     <CustomButton className="lg:mt-0 mt-3 lg:flex hidden lg:w-3/12 sm:w-5/12 max-w-full" arrow={true}>{link}</CustomButton>
//                 </div> :

//                 <div className="w-full h-full flex flex-col sm:items-start items-center justify-center">
//                     <ContentHeading>
//                         <Heading heading={'h1'} style={'2xl:w-[77%] lg:w-8/12 w-full'}>{heading}</Heading>
//                     </ContentHeading>
//                 </div>}

//             {description &&
//                 <Description className={'mt-6 2xl:w-7/12 lg:w-8/12 w-full'}>{description}</Description>
//             }

//             <div className="lg:my-10 sm:my-7 my-5 w-full h-full">
//                 {children}
//             </div>
//         </ContentWrapper>
//     )
// }


'use client';
import { Heading } from '@/components/Heading'
import { ContentHeading, ContentWrapper } from '@/components/Providers'
import { CustomButton } from '../ui/custom/Button/custom-button'
import { Description } from '../Description'
import Link from 'next/link';

export const Section = ({ children, subHeading, heading, buttonText, bgMute, link, description = "" }) => {
    return (
        <ContentWrapper className={`${bgMute ? "bg-mute" : ""}`}>
            {subHeading && (
                <ContentHeading>
                    <Heading style="text-primary lg:text-xl my-0">{subHeading}</Heading>
                </ContentHeading>
            )}

            {link ? (
                <div className="flex sm:flex-row flex-col w-full justify-between items-center">
                    {heading && (
                        <ContentHeading>
                            <Heading heading={'h1'} style={'2xl:w-10/12 lg:w-8/12 w-full '}>{heading}</Heading>
                        </ContentHeading>
                    )}

                    {link && (
                        // <Link href={link} className='w-full h-full'>
                            <CustomButton className="lg:mt-0 mt-3 lg:flex hidden lg:w-3/12 sm:w-5/12 max-w-full" arrow={true}>
                                {link}
                            </CustomButton>
                        // </Link>
                    )}
                </div>
            ) : (
                <div className="w-full h-full flex flex-col sm:items-start items-center justify-center">
                    {heading && (
                        <ContentHeading>
                            <Heading heading={'h1'} style={'2xl:w-[77%] lg:w-8/12 w-full'}>{heading}</Heading>
                        </ContentHeading>
                    )}
                </div>
            )}

            {description && (
                <Description className={'mt-6 2xl:w-7/12 lg:w-8/12 w-full'}>{description}</Description>
            )}

            {children && (
                <div className="lg:my-10 sm:my-7 my-5 w-full h-full">
                    {children}
                </div>
            )}
        </ContentWrapper>
    )
}