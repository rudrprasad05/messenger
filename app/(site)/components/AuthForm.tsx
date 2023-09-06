'use client'

import { 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from 'react-hook-form'
import React, { useCallback, useState } from 'react'
import Input from '@/app/components/input/Input'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {

    const [variant, setVariant] = useState<Variant>("LOGIN")
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN'){
            setVariant("REGISTER")
        }
        else{
            setVariant("LOGIN")
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if(variant === "REGISTER"){
            // axios register
        }
        if(variant === "LOGIN"){
            // axios logim
        }
        const socialAction = (action : string) => {
            setIsLoading(true)

            // next auth social sign
        }
    }

    return (
        <div className='w-full mx-auto shadow-md rounded-lg bg-white'>
            <div className='px-5 py-2'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        label='Email' 
                        register={register}
                        id="Email"
                    />
                </form>
            </div>
        </div>
    )
}

export default AuthForm