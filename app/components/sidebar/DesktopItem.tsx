'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface DesktopItemProps{
    href : string,
    icon : any,
    label : string,
    onClick? : () => void,
    active? : boolean 
}

const DesktopItem : React.FC<DesktopItemProps> = ({
    href,
    icon : Icon,
    label,
    onClick,
    active
}) => { 

    const handleClick = () => {
        if(onClick){
            return onClick()
        }
    }
  return (
    <li onClick={handleClick}>
        <Link 
            href={href}
            className={clsx(`
                flex
                gap-2
                rounded-full
                p-3 
                transition 
                hover:bg-gray-200
                items-center
                

            `,
            active && "bg-gray-200"
            )}
        >

            <Icon strokeWidth={1.5} className={"w-6 h-6 shrink-0"}/>
            <span className='sr-only'>{label}</span>
        </Link>
    </li>
  )
}

export default DesktopItem