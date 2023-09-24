"use client"

import Modal from '@/app/components/Modal';
import useConversation from '@/app/hooks/useConversation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'
import toast from 'react-hot-toast';
import { CiWarning } from 'react-icons/ci';

interface props{
    isOpen?: boolean;
    onClose: () => void;

}

const ConfirmModel : React.FC<props> = ({
    isOpen,
    onClose
}) => {

    const router = useRouter()
    const { conversationId } = useConversation()
    const [isLoading, setIsLoading] = useState(false)

    const onDelete = useCallback(() => {
        setIsLoading(true)

        axios.delete(`/api/conversations/${conversationId}`)
        .then(() => {
            onClose()
            toast.success("Conversation Deleted")
            router.push('/conversations')
            router.refresh()
        })
        .catch((error) => {
            toast.error("Something went wrong")

        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [conversationId, router, onClose])

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}

        >
            <div className='flex flex-col text-center items-center gap-3'>
                <div className='rounded-full p-2 bg-rose-400 mx-auto'>
                    <CiWarning size={30} color={"white"}/>
                </div>
                <div className='text-xl font-bold '>
                    Are You Sure?
                </div>
                <div className='text-gray-400 text-sm '>
                    Do you really want to delete this conversation. This action cannot be undone
                </div>
                <div className='flex gap-3'>
                    <button 
                        className='bg-gray-200 text-black rounded-md shadow-sm px-5 py-2'
                        onClick={onClose}
                        disabled={isLoading}

                    >
                        Cancel
                    </button>
                    <button 
                        disabled={isLoading}
                        className='bg-rose-400 text-white rounded-md shadow-sm px-5 py-2'
                        onClick={onDelete}

                    >
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmModel