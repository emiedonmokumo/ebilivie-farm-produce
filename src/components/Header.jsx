import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ModeContext from "../context/ModeContext"
import AuthContext from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "sonner";
import app from "../config/firebase";
const auth = getAuth(app);


const Header = () => {
    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const { isLoggedIn } = currentUser
    const { darkMode, setDarkMode } = useContext(ModeContext)
    const [showMenu, setShowMenu] = useState(false)

    const logOut = () => {
        signOut(auth).then(() => {
            navigate('/login')
            setCurrentUser({ ...currentUser, isLoggedIn: false })
        }).catch((error) => {
            toast(error)
        });
    }

    return (
        <div className="">
            <div className={`flex flex-row lg:flex-wrap justify-between items-center font-spartan`}>
                <div>
                    <div className='relative'>
                        <img src="/images/Ellipse 123.png" alt="" className='absolute top-0 -left-10 sm:hidden' />
                        <img src="/images/Ellipse 123.png" alt="" className='absolute top-0 left-0 sm:hidden' />
                        <div className='sm:flex sm:items-center p-12 sm:p-5'>
                            <Link to={'/'}><h5 className='text-1xl pr-8'>Ebilivie</h5></Link>
                            <button onClick={() => setDarkMode(!darkMode)} className={`transition delay-300 duration-300 ease-in-out lg:mr-5 md:mr-5 text-3xl sm:text-xl ${darkMode ? 'text-white' : 'text-[#263238]'} lg:hidden md:hidden`}>{darkMode ? <i class="bi bi-brightness-high"></i> : <i className="bi bi-moon"></i>}</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center md:flex-row-reverse sm:flex-row-reverse">
                    <div className={`p-5 ${darkMode ? 'text-white' : 'text-[#263238]'} text-sm transition delay-300 duration-300 ease-in-out`}>
                        <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
                            <span className="block bg-[#008000] w-6 h-0.5 mb-1"></span>
                            <span className={`block bg-[#008000] h-0.5 mb-1 my-1 ${showMenu ? 'w-4' : 'w-6'}`}></span>
                            <span className="block bg-[#008000] w-6 h-0.5"></span>
                        </button>
                        {isLoggedIn ? (
                            <ul className='flex md:hidden sm:hidden'>
                                <li className='lg:mr-5 md:mr-5 hover:text-[#008000]'><Link to="/dashboard">Dashboard</Link></li>
                                {/* <li className='lg:mr-5 md:mr-5 hover:text-[#008000]'><Link to="#">About</Link></li>
                                <li className='lg:mr-5 md:mr-5 hover:text-[#008000]'><Link to="/products">Products</Link></li>
                                <li className=''><Link to="#">How it works</Link></li> */}
                            </ul>
                        ) : (
                            <ul className='flex md:hidden sm:hidden'>
                                <li className='lg:mr-5 md:mr-5 hover:text-[#008000]'><Link to="/">Home</Link></li>
                                <li className='lg:mr-5 md:mr-5 hover:text-[#008000]'><Link to="#">About</Link></li>
                                <li className='lg:mr-5 md:mr-5 hover:text-[#008000]'><Link to="/products">Products</Link></li>
                                <li className=''><Link to="#">How it works</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={`p-5 ${darkMode ? 'text-white' : 'text-[#263238]'} text-sm`}>
                        <ul className='sm:hidden flex items-center sm:flex-row-reverse'>
                            <li><button onClick={() => setDarkMode(!darkMode)} className={`transition delay-300 duration-300 ease-in-out lg:mr-5 md:mr-5 text-3xl sm:text-xl ${darkMode ? 'text-white' : 'text-[#263238]'} sm:absolute`}>{darkMode ? <i class="bi bi-brightness-high"></i> : <i className="bi bi-moon"></i>}</button></li>
                            {isLoggedIn ?
                                (
                                    <>
                                        <li className='lg:mr-5 md:mr-5'><button onClick={logOut} className='border-solid border border-[#23B123] p-3 px-8 rounded-lg hover:bg-[#008000] hover:text-white md:p-2 md:px-5 md:rounded-lg sm:text-sm'>Logout</button></li>
                                        {/* <li className='lg:mr-5'><Link to="/login" className='bg-[#008000] p-3 px-8 text-[#f2f8f2] rounded-lg hover:bg-[#23B123] md:p-2 md:px-5 md:rounded-lg'>Login</Link></li> */}
                                    </>
                                ) : (
                                    <>
                                        <li className='lg:mr-5 md:mr-5'><Link to="/signup" className='border-solid border border-[#23B123] p-3 px-8 rounded-lg hover:bg-[#008000] hover:text-white md:p-2 md:px-5 md:rounded-lg sm:text-sm'>Sign up</Link></li>
                                        <li className='lg:mr-5'><Link to="/login" className='bg-[#008000] p-3 px-8 text-[#f2f8f2] rounded-lg hover:bg-[#23B123] md:p-2 md:px-5 md:rounded-lg'>Login</Link></li>
                                    </>
                                )}
                        </ul>
                    </div>
                </div >
            </div >
            {showMenu && (
                <ul className='flex lg:hidden md:flex-col sm:flex-col text-right p-5'>
                    <li className='hover:text-[#008000]'><Link onClick={() => setShowMenu(!showMenu)} to="/">Home</Link></li>
                    <li className='hover:text-[#008000]'><Link onClick={() => setShowMenu(!showMenu)} to="#">About</Link></li>
                    <li className='hover:text-[#008000]'><Link onClick={() => setShowMenu(!showMenu)} to="/products">Products</Link></li>
                    <li className=''><Link to="#">How it works</Link></li>
                    <li className='mt-2'><Link to="#" className='border-solid border border-[#23B123] p-2 px-5 rounded-lg hover:bg-[#008000] hover:text-white md:p-2 md:px-5 md:rounded-lg sm:text-sm'>Get Started</Link></li>
                    <li className='mt-5'><Link to="#" className='bg-[#008000] p-2 px-5 text-[#f2f8f2] rounded-lg hover:bg-[#23B123] md:p-2 md:px-5 md:rounded-lg sm:text-sm'>Contact us</Link></li>
                </ul>)}
        </div >
    )
}

export default Header
