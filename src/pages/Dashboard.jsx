import React, { useEffect, useState } from 'react';
import app from '../config/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Table from '../components/Table';
import formatPrice from '../../utils/formatPrice';
import ModalContainer from '../components/ModelContainer';
const auth = getAuth(app);

const Dashboard = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
            } else {
                console.log('no user');
            }
        });
    }, []);

    return (
        <div>
            <button onClick={openModal} className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700'>New Crop</button>

            <ModalContainer isOpen={isModalOpen} onClose={closeModal} title="Add New Crop">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Crop Name:</label>
                        <input
                            type="text"
                            placeholder="e.g., Maize"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Planting Date:</label>
                        <input
                            type="date"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Expected Harvest Date:</label>
                        <input
                            type="date"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[green] text-[white] py-2 px-4 rounded hover:bg-green-700"
                    >
                        Save
                    </button>
                </form>
            </ModalContainer>

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
    );
}

export default Dashboard;
