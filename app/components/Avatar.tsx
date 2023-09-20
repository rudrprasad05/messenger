'use client'

import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface AvatarProps{
    user?: User
}

const Avatar : React.FC<AvatarProps> = ({
    user
}) => {
  return (
    <div className='h-8 w-8 mx-auto shadow-md rounded-full relative'>
        <img src={user?.image || '/images/placeholder.jpg'} alt="" className='rounded-full h-full w-full object-cover'/>
        <span className='w-2 h-2 ring-2 ring-white bg-green-500 rounded-full absolute top-0 right-0'></span>
    </div>
  )
} 

export default Avatar