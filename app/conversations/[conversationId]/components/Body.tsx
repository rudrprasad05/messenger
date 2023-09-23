"use client"

import useConversation from '@/app/hooks/useConversation'
import { FullMessageType } from '@/app/types'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import MessageBox from './MessageBox'

interface props{
  initialMessages : FullMessageType[]
}

const Body : React.FC<props> = ({
  initialMessages
}) => {

  const [messages, setMessages] = useState(initialMessages || [])
  const bottomRef = useRef<HTMLDivElement>(null)

  const { conversationId } = useConversation()

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`)
  }, [conversationId])

  return (
    <div className='flex-1 overflow-y-auto'>
      {messages && messages?.map((message, index) => (
        <MessageBox
          isLast={index === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}

      <div ref={bottomRef} className={"pt-12"}/>
    </div>
  )
}

export default Body