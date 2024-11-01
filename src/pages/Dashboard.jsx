import React, { useEffect } from 'react'
import app from '../config/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
            
        </div>
    )
}

export default Dashboard
