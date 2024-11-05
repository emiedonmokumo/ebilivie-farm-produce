import React, { useEffect, useState } from 'react';
import app from '../config/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Table from '../components/Table';
import formatPrice from '../../utils/formatPrice';
import ModalContainer from '../components/ModelContainer';
import { cropFormData } from '../../lib/Crop';
import product from '../../products.json'
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import CropReportChart from '../components/CropReportChart';
const auth = getAuth(app);

const Dashboard = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { formData } = cropFormData()

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
        <>
            <Sidebar />
            <main className='mt-2'>
                    <div className="">
                        <CropReportChart formData={product} />
                    </div>
            </main>
        </>
    );
}

export default Dashboard;
