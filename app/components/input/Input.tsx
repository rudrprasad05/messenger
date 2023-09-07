'use-client'

import React from 'react'
import clsx from 'clsx'
import { 
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean
}



const Input : React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
  return (
    <div className='mt-2 mb-4'>
        <label 
            htmlFor={id}
            className={"text-sm text-gray-900"}
        >
            {label}
        </label>
        <div className='mt-2'>
            <input 
                type={type}
                id={id}
                autoComplete={id}
                disabled={disabled}
                {...register(id, { required })} 
                className={clsx(`
                    form-input
                    w-full
                    rounded-md
                    border-0
                    ring-gray-300
                    ring-1
                    focus:outline-none 
                    focus:ring-gray-500`,
                    errors[id] && "focus:ring-rose-500",
                    disabled && "opacity-50 cursor-default"
                )}
            />

        </div>
    </div>
  )
}

export default Input