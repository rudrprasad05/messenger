"use client"

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface Props{
    placeholder?: string
    id: string
    type?: string
    required?: boolean
    register?: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const MessageInput : React.FC<Props> = ({
    placeholder,
    id,
    type,
    register,
    required,
    errors
}) => {
  return (
    <div className='relative w-full'>
        <input 
            type={type} 
            id={id}
            autoComplete={id}
            {...register(id, {required})}
            placeholder={placeholder}
            className={'w-full text-black font-light py-2 px-4 bg-neutral-100 rounded-full outline-none'}
        />
    </div>
  )
}

export default MessageInput