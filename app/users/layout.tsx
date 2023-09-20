import React from 'react'
import getUsers from '../actions/getUsers'
import SideBar from '../components/sidebar/SideBar'
import UserList from './components/UserList'

const UsersLayout = async ({
    children
} : {
    children : React.ReactNode
}) => {

    const users = await getUsers()
    return (
        // @ts-expect-error Server Component
        <SideBar>
            <div className='h-full ' id='test'>
                <UserList items={users}/>
                {children}
            </div>
        </SideBar>
            
  )
}

export default UsersLayout