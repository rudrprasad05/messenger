'use client'

import Avatar from '@/app/components/Avatar'
import Loading from '@/app/components/Loading'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'

interface UseBoxProps{
  data : User
}

const UserBox : React.FC<UseBoxProps> = ({
  data
}) => {

  const router = useRouter()
  const [loading, setloading] = useState(false)

  const handleClick = useCallback(() => {
    setloading(true)

    axios.post('/api/conversations', {
      userId: data.id,
    })

    .then((data) => {
      router.push(`/conversations/${data.data.id}`)
    })

    .finally(() => {
      setloading(false)
    })
  }, [data,router])
  return (
    <>
      {loading && (
        <Loading/>
      )}
      <div 
        onClick={handleClick}
        className={'text-sm w-4/5 mx-auto py-2 px-3 flex items-center gap-3 bg-gray-100 rounded-md hover:bg-gray-200'}
      >
        <div className=''>
          <Avatar user={data}/>
        </div>
        <div>
          {data?.name}
        </div>

      </div>
    
    </>
   
  )
}

export default UserBox