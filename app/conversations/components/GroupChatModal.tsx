"use client"

import Button from '@/app/components/Button'
import Input from '@/app/components/input/Input'
import Select from '@/app/components/input/Select'
import Modal from '@/app/components/Modal'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface props{
    isOpen? : boolean
    onClose : () => void
    users : User[]
}

const GroupChatModal : React.FC<props> = ({
    isOpen,
    onClose,
    users
}) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            members: []
        }
    })

    const members = watch("members")

    const onSubmit : SubmitHandler<FieldValues> = (data) => {

        setIsLoading(true)
        axios.post('/api/conversations', {
            ...data,
            isGroup: true

        })
        .then(() => {
            toast.success("Group Chat Created")
            router.refresh()
            onClose()
        })
        .catch((error : any) => {
            console.log(error)
            toast.error("Something went wrong")
        })
        .finally(() => setIsLoading(false))
    } 

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <div>
                        <Input
                            register={register}
                            label='Name'
                            id='name'
                            disabled={isLoading}
                            required
                            errors={errors}
                        />

                        <Select
                            disabled={isLoading}
                            label='Members'
                            options={users.map((user) => (
                                {
                                    value: user.id,
                                    label: user.name
                                }
                            ))}
                            onChange={(value) => setValue('members', value, {
                                shouldValidate: true
                            })}
                            value={members}

                        />
                    </div>
                </div>
                <div className='flex justify-end gap-3 mt-10'>
                    <Button
                        disabled={isLoading}
                        onClick={onClose}
                        type="button"
                        secondary
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isLoading}
                        type="submit"
                    >
                        Create
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default GroupChatModal