"use client"

import useConversation from '@/app/hooks/useConversation'
import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { HiPhoto, HiPaperAirplane } from 'react-icons/hi2'
import MessageInput from './MessageInput'

import { CldUploadButton } from 'next-cloudinary'

const Form = () => {

    const { conversationId } = useConversation()
    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    })

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setValue("message", "", { shouldValidate: true })
        axios.post('/api/messages', {
            ...data,
            conversationId
        })

    }

    const handleUpload = ( result : any ) => {
        axios.post('/api/messages', {
            image: result?.info?.secure_url,
            conversationId
        })
    }

    return (
        <div className='py-4 px-2 border flex gap-3 items-center'>
            <CldUploadButton
                options={
                    {maxFiles: 1}
                }
                onUpload={handleUpload}
                uploadPreset="messenger"
            >
                <HiPhoto size={25} color={"#4b5563"}/>
            </CldUploadButton>
            <form action="" onSubmit={handleSubmit(onSubmit)} className={'flex items-center w-full gap-3'}>
                <MessageInput
                    id="message"
                    register={register}
                    errors={errors}
                    required
                    placeholder={"Write a message"}
                />
                <button 
                    type='submit'
                    className='rounded-full cursor-pointer bg-sky-500 p-2'
                >
                    <HiPaperAirplane size={18}/>
                </button>
            </form>
        </div>
    )
    }

export default Form