"use client"

import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useMemo } from 'react'
import { Conversation, Message, User }from '@prisma/client'
import { format } from 'date-fns'
import { clsx } from 'clsx'
import { FullConversationType } from '@/app/types'
import useOtherUser from '@/app/hooks/useOtherUser'
import { useSession } from 'next-auth/react'
import Avatar from '@/app/components/Avatar'
import AvatarGroup from '@/app/components/AvatarGroup'

interface ConversationBoxProps{
    data: FullConversationType,
    selected?: boolean
}

const ConversationBox : React.FC<ConversationBoxProps> = ({
    data, selected
}) => {

    const otherUser = useOtherUser(data)
    const router = useRouter()
    const session = useSession()



    const handleClick = useCallback(() => {
        router.push(`/conversations/${data.id}`)
    }, [data.id, router])

    const lastMessage = useMemo(() => {
        const messages = data.messages || []
        return messages[messages.length - 1]
    }, [data.messages])

    const userEmail = useMemo(() => {
        return session.data?.user?.email
    }, [session.data?.user?.email])

    const hasSeen = useMemo(() => {
        if(!lastMessage) return false

        const seenArr = lastMessage.seen || []

        if(!userEmail) return false

        return seenArr.filter((user) => user.email === userEmail).length !== 0
    }, [userEmail, lastMessage])

    const lastMessageText = useMemo(() => {
        if(lastMessage?.image){
            return 'Sent Image'
        }
        if(lastMessage?.body){
            return lastMessage.body
        }
        return "started a convo"
    }, [lastMessage])

    return (
        <div
            onClick={handleClick}
            className={clsx(`
                w-full 
                relative 
                flex 
                items-start
                gap-2 
                py-3
                px-2 
                hover:bg-neutral-200
                rounded-lg
                transition
                cursor-pointer
                items-center
                transition
                bg-neutral-100
                `,
                selected ? 'bg-neutral-100' : 'bg-white'
            )}
        >
            <div className=''>
                {data.isGroup ? (
                    <AvatarGroup users={data.users} />
                ) : (
                    <Avatar user={otherUser} />
                )}
            </div>

            <div className='flex flex-col'>
                <p className='text-slate-700 text-sm mr-auto'>
                    { data.name || otherUser.name }
                </p>
                <p className={clsx('text-xs', hasSeen ? "text-gray-400" : "text-gray-900")}>
                    {lastMessageText}
                </p>
            </div>

            {lastMessage?.createdAt && (
                <div className='text-gray-400 text-xs text-light ml-auto'>
                    {format(new Date(lastMessage.createdAt), 'p')}
                </div>
            )}

            

        </div>
    )
}

export default ConversationBox