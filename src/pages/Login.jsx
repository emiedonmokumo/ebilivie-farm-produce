import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import ModeContext from "../context/ModeContext"
import LoginForm from "../components/LoginForm"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";
import { toast } from "sonner";
import AuthContext from "../context/AuthContext";

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
    const { darkMode } = useContext(ModeContext)
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    useEffect(()=>{
        if(currentUser.isLoggedIn == true) {
            navigate('/dashboard')
        }
    }, [currentUser])

    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!user.email || !user.password) toast('All fields are required!')
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate('/dashboard')
                setCurrentUser({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    isLoggedIn: true,
                })
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }

    return (
        <div className={`mt-16 font-spartan`}>
            <LoginForm action={handleSubmit} user={user} setUser={setUser} />
        </div>
    )
}

export default Login
