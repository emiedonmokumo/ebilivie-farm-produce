import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import ModeContext from "../context/ModeContext"
import SignupForm from "../components/SignupForm"
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";
import AuthContext from "../context/AuthContext"
const auth = getAuth(app);


const Signup = () => {
    const { darkMode } = useContext(ModeContext)
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    useEffect(()=>{
        if(currentUser.isLoggedIn == true) {
            navigate('/dashboard')
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newUser.confirmPassword !== newUser.password) {
            toast('Password do not match')
            return
        }
        createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                navigate('/dashboard')
            })
            .catch((error) => {
                console.log(error)
                toast(error.message)
            });
    }

    return (
        <div className={`mt-5 font-spartan`}>
            <Toaster />
            <SignupForm newUser={newUser} setNewUser={setNewUser} action={handleSubmit} />
        </div>
    )
}

export default Signup
