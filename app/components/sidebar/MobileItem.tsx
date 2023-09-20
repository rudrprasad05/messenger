'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface MobileItemProps{
    href : string,
    icon : any,
    active? : boolean,
    onClick? : () => void,
}
const MobileItem : React.FC<MobileItemProps> = ({
    href, icon : Icon, active, onClick
}) => {

    const handleClick = () => {
        if (onClick){}
    }

    return (
        <Link href={href} className={clsx("text-gray-500 px-5 py-2 flex justify-center", active && "text-black bg-gray-200")}>
            <Icon className={'w-8 h-8'} strokeWidth={1.2}/>
        </Link>
    )
}

export default MobileItem