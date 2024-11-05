import React from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import { Link } from 'react-router-dom'
import products from '../../products.json'

const Crops = () => {
    const columns = ['Crop Name', 'Crop Variety', 'Growth Stage', 'Estimated Yield', 'Actual Yield', 'Expected Harvest'];

    return (
        <>
            <Sidebar />
            <main className='mt-10 w-[120%]'>
                <div className='mb-5'>
                    <Link to={'/newcrop'} className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700'>New Crop</Link>
                </div>
                <Table columns={columns} data={products}/>
            </main>
        </>
    )
}

export default Crops
