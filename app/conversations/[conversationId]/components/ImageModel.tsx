"use client"

import Modal from '@/app/components/Modal'
import Image from 'next/image'
import React from 'react'

interface props{
    isOpen? : boolean
    src? : string | null
    onClose : () => void 
}

const ImageModel : React.FC<props> = ({
    isOpen,
    src,
    onClose
}) => {
    if (!src) return null

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='w-80 h-80'>
                <Image
                    alt='img modal'
                    className='object-cover'
                    fill
                    src={src}

                />
            </div>
        </Modal>
    )

}

export default ImageModel