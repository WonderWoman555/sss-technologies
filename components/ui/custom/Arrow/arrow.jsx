import React from 'react'
import { Icon } from '@/components/ui'

export const Arrow = () => {
    return (
        <div className="cursor-pointer w-auto h-auto hover:rotate-45 transition-all duration-300 rounded-full bg-primary lg:p-4 p-3" >
            <Icon.Arrow className={'lg:w-5 lg:h-5 w-4 h-4 duration-300 text-white'} />
        </div>
    )
}
