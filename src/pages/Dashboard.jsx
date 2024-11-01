import React, { useEffect } from 'react'
import app from '../config/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);


const Dashboard = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log(user)
                // ...
            } else {
                // User is signed out
                // ...
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
