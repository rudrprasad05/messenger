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
    <div>
        <label 
            htmlFor={id}
            className={"text-sm text-blue-500"}
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
                    ring-2
                `)}
            />

        </div>
    </div>
  )
}

export default Input