import { useContext } from "react"
import { Link } from "react-router-dom"
import ModeContext from "./ModeContext"

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ModeContext)
  return (
    <div className={`flex lg:flex-row flex-wrap justify-between items-center font-spartan`}>
        <div>
            <div className='relative'>
                <img src="/images/Ellipse 123.png" alt="" className='absolute top-0 -left-10'/>
                <img src="/images/Ellipse 123.png" alt="" className='absolute top-0 left-0'/>
                <div className='p-12'>
                    <h5 className='text-1xl pr-8'>Ebilivie</h5>
                </div>
            </div>
        </div>
        <div className={`p-5 ${darkMode ? 'text-light' : 'text-oxfordBlue'} text-sm transition delay-300 duration-300 ease-in-out`}>
            <ul className='flex'>
                <li className='lg:mr-5 md:mr-5 hover:text-forestGreen'><Link to="/">Home</Link></li>
                <li className='lg:mr-5 hover:text-forestGreen'><Link to="#">About</Link></li>
                <li className='lg:mr-5 hover:text-forestGreen'><Link to="/products">Products</Link></li>
                <li className=''><Link to="#">How it works</Link></li>
            </ul>
        </div>
        <div className={`p-5 ${darkMode ? 'text-light' : 'text-oxfordBlue'} text-sm`}>
            <ul className='flex items-center'>
                <li><button onClick={()=>setDarkMode(!darkMode)} className={`transition delay-300 duration-300 ease-in-out mr-5 text-3xl ${darkMode ? 'text-light' : 'text-oxfordBlue'}`}>{darkMode ? <i class="bi bi-brightness-high"></i> : <i className="bi bi-moon"></i>}</button></li>
                <li className='lg:mr-5'><a href="#" className='border-solid border border-lightGreen p-3 px-8 rounded-lg hover:bg-forestGreen hover:text-light'>Get Started</a></li>
                <li className='lg:mr-5'><a href="#" className='bg-forestGreen p-3 px-8 text-semiLight rounded-lg hover:bg-lightGreen'>Contact us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
