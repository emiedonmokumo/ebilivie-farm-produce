import React from 'react'
import CropAddForm from '../components/CropAddForm'
import Sidebar from '../components/Sidebar'

const NewCrop = () => {
    return (
        <>
            <Sidebar />
            <main className='mt-10'>
                <CropAddForm />
            </main>
        </>
    )
}

export default NewCrop
