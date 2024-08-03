import React from 'react'
import Image from 'next/image'
import Client1 from '@/assets/clients-logo/logo2.png'
import Client2 from '@/assets/clients-logo/logo3.png'
import Client3 from '@/assets/clients-logo/logo4.png'
import Client4 from '@/assets/clients-logo/logo5.png'
import Client5 from '@/assets/clients-logo/logo6.png'
import Client6 from '@/assets/clients-logo/logo7.png'
import Client7 from '@/assets/clients-logo/logo8.png'
import Client8 from '@/assets/clients-logo/logo9.png'

const clientLogos = [
    { title: 'Client 1', imageUrl: Client1 },
    { title: 'Client 2', imageUrl: Client2 },
    { title: 'Client 3', imageUrl: Client3 },
    { title: 'Client 4', imageUrl: Client4 },
    { title: 'Client 5', imageUrl: Client5 },
    { title: 'Client 6', imageUrl: Client6 },
    { title: 'Client 7', imageUrl: Client7 },
    { title: 'Client 8', imageUrl: Client8 },
]

const PartnerIconCard = ({ title, imageUrl }) => {
    return (
        <div className="text-xs md:text-xl bg-mute flex items-center justify-center px-5 py-2 md:py-4 lg:py-5 rounded-2xl">
            <Image src={imageUrl} alt={title} width={150} height={60} className='w-auto h-12 object-contain' />
        </div>
    )
}

const PartnerLogosCards = () => {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clientLogos.map((client, index) => (
                <PartnerIconCard key={index} title={client.title} imageUrl={client.imageUrl} />
            ))}
        </div>
    )
}

export { PartnerLogosCards }