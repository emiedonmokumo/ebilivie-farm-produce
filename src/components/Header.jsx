import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ModeContext from "./ModeContext"

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ModeContext)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="">
            <div className={`flex flex-row lg:flex-wrap justify-between items-center font-spartan`}>
                <div>
                    <div className='relative'>
                        <img src="/images/Ellipse 123.png" alt="" className='absolute top-0 -left-10 sm:hidden' />
                        <img src="/images/Ellipse 123.png" alt="" className='absolute top-0 left-0 sm:hidden' />
                        <div className='sm:flex sm:items-center p-12 sm:p-5'>
                            <h5 className='text-1xl pr-8'>Ebilivie</h5>
                            <button onClick={() => setDarkMode(!darkMode)} className={`transition delay-300 duration-300 ease-in-out lg:mr-5 md:mr-5 text-3xl sm:text-xl ${darkMode ? 'text-light' : 'text-oxfordBlue'} lg:hidden md:hidden`}>{darkMode ? <i class="bi bi-brightness-high"></i> : <i className="bi bi-moon"></i>}</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center md:flex-row-reverse sm:flex-row-reverse">
                    <div className={`p-5 ${darkMode ? 'text-light' : 'text-oxfordBlue'} text-sm transition delay-300 duration-300 ease-in-out`}>
                        <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
                            <span className="block bg-forestGreen w-6 h-0.5 mb-1"></span>
                            <span className={`block bg-forestGreen h-0.5 mb-1 my-1 ${showMenu ? 'w-4' : 'w-6'}`}></span>
                            <span className="block bg-forestGreen w-6 h-0.5"></span>
                        </button>

                        <ul className='flex md:hidden sm:hidden'>
                            <li className='lg:mr-5 md:mr-5 hover:text-forestGreen'><Link to="/">Home</Link></li>
                            <li className='lg:mr-5 md:mr-5 hover:text-forestGreen'><Link to="#">About</Link></li>
                            <li className='lg:mr-5 md:mr-5 hover:text-forestGreen'><Link to="/products">Products</Link></li>
                            <li className=''><Link to="#">How it works</Link></li>
                        </ul>
                    </div>
                    <div className={`p-5 ${darkMode ? 'text-light' : 'text-oxfordBlue'} text-sm`}>
                        <ul className='sm:hidden flex items-center sm:flex-row-reverse'>
                            <li><button onClick={() => setDarkMode(!darkMode)} className={`transition delay-300 duration-300 ease-in-out lg:mr-5 md:mr-5 text-3xl sm:text-xl ${darkMode ? 'text-light' : 'text-oxfordBlue'} sm:absolute`}>{darkMode ? <i class="bi bi-brightness-high"></i> : <i className="bi bi-moon"></i>}</button></li>
                            <li className='lg:mr-5 md:mr-5'><Link to="#" className='border-solid border border-lightGreen p-3 px-8 rounded-lg hover:bg-forestGreen hover:text-light md:p-2 md:px-5 md:rounded-lg sm:text-sm'>Get Started</Link></li>
                            <li className='lg:mr-5'><Link to="#" className='bg-forestGreen p-3 px-8 text-semiLight rounded-lg hover:bg-lightGreen md:p-2 md:px-5 md:rounded-lg'>Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {showMenu && (
                <ul className='flex lg:hidden md:flex-col sm:flex-col text-right p-5'>
                    <li className='hover:text-forestGreen'><Link onClick={()=> setShowMenu(!showMenu)} to="/">Home</Link></li>
                    <li className='hover:text-forestGreen'><Link onClick={()=> setShowMenu(!showMenu)} to="#">About</Link></li>
                    <li className='hover:text-forestGreen'><Link onClick={()=> setShowMenu(!showMenu)} to="/products">Products</Link></li>
                    <li className=''><Link to="#">How it works</Link></li>
                </ul>)}
        </div>
    )
}

export default Header
