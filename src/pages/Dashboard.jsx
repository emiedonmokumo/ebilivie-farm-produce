import React, { useEffect } from 'react'
import app from '../config/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Table from '../components/Table';
import formatPrice from '../../utils/formatPrice';
const auth = getAuth(app);


const Dashboard = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
            } else {
                console.log('no user')
            }
        });
    }, [])

    return (
        <div className=''>
            <div className='flex justify-center space-x-5 items-center my-8'>
                <button className='p-10 bg-[#ddfbe5] rounded-md font-bold text-xl'>{formatPrice(200000)}</button>
                <button className='p-10 bg-[#ddfbe5] rounded-md flex flex-col justify-center items-center'>
                    <span className='text-sm'>Stock</span>
                    <span className='text-xl font-bold'>2,000</span>
                </button>
                <button className='p-10 bg-[#ddfbe5] rounded-md'>New</button>
            </div>
            <Table />
        </div>
    )
}

export default Dashboard
