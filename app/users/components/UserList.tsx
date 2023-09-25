import { User } from '@prisma/client'
import React from 'react'
import UserBox from './UserBox'

interface UserListProps{
  items : User[] 
}

const UserList : React.FC<UserListProps> = ({
  items
}) => {
  return (
    <aside className='fixed 
      inset-y-0 
      pb-20
      lg:pb-0
      lg:left-20 
      lg:w-80 
      lg:block
      overflow-y-auto 
      border-r 
      border-gray-200
      block w-full left-0'
    >
      <div className='px-6 py-2 font-bold text-xl'>
        Users
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        {items && items?.map((item) => (
          <UserBox key={item.id} data={item}/>
        ))}
      </div>
    </aside>

  )
}

export default UserList