import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import app from '../config/firebase';
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        uid: '',
        email: '',
        displayName: '',
        isLoggedIn: true
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setCurrentUser({ ...currentUser, isLoggedIn: false })
                // ...
            }
        });
    }, [])
    const value = { currentUser, setCurrentUser }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
