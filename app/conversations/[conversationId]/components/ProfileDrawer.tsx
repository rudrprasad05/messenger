"use client"

import { Conversation, User } from '@prisma/client'
import React from 'react'

interface props{
  isOpen: boolean
  onClose: () => void
  data: Conversation & {
    users: User[]
  }
}

const ProfileDrawer : React.FC<props> = ({
  isOpen,
  onClose,
  data
}) => {
  return (
    <div>ProfileDrawer</div>
  )
}

export default ProfileDrawer