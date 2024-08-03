'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ContactForm } from '@/components/forms/contact-form'
import { ContactBackground } from '@/components/ui/custom/Background/contact-background'
import { contactInfo } from '@/data/contact'
import { BookMeeting } from '@/components/book-meeting/book-meeting'
import { ErrorBoundary } from 'react-error-boundary'

export const ContactItem = ({ icon: Icon, label, content, href }) => (
    <div className="flex gap-x-4">
        <dt className="flex-none">
            <span className="sr-only">{label}</span>
            <Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
        </dt>
        <dd>
            {href ? (
                <a className="hover:text-gray-800/90" href={href}>
                    {content[0]}
                </a>
            ) : (
                content.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < content.length - 1 && <br />}
                    </React.Fragment>
                ))
            )}
        </dd>
    </div>
)

const Contact = () => {
    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense fallback={'loading ...'}>
                <ContactContent />
            </Suspense>
        </ErrorBoundary>
    )
}

const ContactContent = () => {
    const searchParams = useSearchParams()
    const [bookMeeting, setBookMeeting] = useState(false);

    const toggleBookMeeting = () => {
        setBookMeeting((prev) => !prev);
    }

    const contactType = searchParams.get('form')

    useEffect(() => {
        if (contactType === 'meeting') {
            setBookMeeting(true);
        }
    }, [contactType])

    return (
        <div className=" bg-white border">
            <div className="">
                <div className="mx-auto relative isolate grid max-w-full grid-cols-1 lg:grid-cols-2 ">
                    <div className=" -z-20 px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-32 lg:py-48 ">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
                            <ContactBackground />
                            <h2 className="text-3xl font-bold tracking-tight text-gray-800/90">Let&lsquo;s talk about your project</h2>
                            <p className="mt-6 text-base leading-8 text-gray-600">
                                Witness the power of creative design, website development, and online marketing strategies with SSS.
                                Boost your business with SEO, SMO, email & PPC solutions offered by SSSl&apos;s expert team.
                                We provide compelling copywriting and content development services for maximum impact.
                                <span onClick={toggleBookMeeting} className="text-sm px-2 underline text-primary font-semibold cursor-pointer pr-1">{bookMeeting ? "Fill out the form" : "Book a meeting?"}</span>
                            </p>

                            <dl className="mt-10 space-y-4 text-sm leading-7 text-gray-600">
                                {contactInfo.map((item, index) => (
                                    <ContactItem key={index} {...item} />
                                ))}
                            </dl>
                        </div>
                    </div>
                    {!bookMeeting ?
                        <ContactForm toggleBookMeeting={toggleBookMeeting} /> :
                        <BookMeeting toggleBookMeeting={toggleBookMeeting} />}
                </div>
            </div>
        </div>
    )
}

export default Contact
