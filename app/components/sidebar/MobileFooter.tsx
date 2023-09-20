'use client'

import useConversation from '@/app/hooks/useConversation'
import useRoutes from '@/app/hooks/useRoutes'
import React from 'react'
import MobileItem from './MobileItem'

const MobileFooter = () => {
    const routes = useRoutes()
    const { isOpen }  = useConversation()

    if(isOpen) return null


    return (
        <>
            <div className='fixed w-full grid grid-cols-3 text-center bg-gray-100 bottom-0 lg:hidden'>
                {routes.map((item) => (
                    <MobileItem
                        key={item.label}
                        href={item.href}
                        onClick={item.onClick}
                        icon={item.icon}
                        active={item.active}
        
                  />
                ))}
            </div>
        </>
    )
}

export default MobileFooter