"use client"

import { User } from '@prisma/client'
import axios from 'axios'
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { uptime } from 'process'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from '../Button'
import Input from '../input/Input'
import Modal from '../Modal'

interface props{
    isOpen? : boolean
    onClose : () => void
    currentUser : User 
}

const SettingsModal : React.FC<props> = ({
    isOpen,
    onClose,
    currentUser
}) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: currentUser?.name,
            image: currentUser?.image,

        }
    })

    const image = watch('image')

    const handleUpload = (result : any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true
        })
    }

    const onSubmit : SubmitHandler<FieldValues> = (data: any) => {
        setIsLoading(true)
        axios.post('/api/settings', data)
        .then(() => {
            router.refresh()
            onClose()

        })
        .catch((error) => {
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
                <div>
                    <p className='text-xl font-bold '>Profile</p>
                    <p className='text-gray-500 text-sm'>Edit your personal info</p>
                </div>
                <div>
                    <Input
                        label='Name'
                        id='name'
                        disabled={isLoading}
                        errors={errors}
                        required
                        register={register}
                    />
                </div>
                <div>
                    <label className='text-sm'>Photo</label>
                    <div>
                        <Image
                            alt='avatar'
                            width={48}
                            height={48}
                            className={'rounded-full'}
                            src={image || currentUser?.image || '/images/placeholder.jpg'}
                        />
                        <CldUploadButton
                            options={{maxFiles: 1}}
                            onUpload={handleUpload}
                            uploadPreset={'messenger'}
                        >
                            <Button disabled={isLoading} secondary type='button'>Change</Button>
                        </CldUploadButton>
                    </div>

                    <div className='ml-auto justify-end gap-3 flex'>
                        <Button 
                            secondary 
                            disabled={isLoading} 
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button 
                            disabled={isLoading}
                            type={'submit'}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default SettingsModal