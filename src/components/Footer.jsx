import { useContext } from 'react'
import ModeContext from '../context/ModeContext'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { darkMode } = useContext(ModeContext)
  return (
    <footer className={`${darkMode ? 'bg-[#231F20] text-[#f2f8f2]' : 'bg-[#f2f8f2] text-[#263238]'} text-sm pt-12`}>
      <div className='p-5 md:px-12'>
        <div className="flex justify-evenly md:flex-col lg:items-center sm:flex-col">
          <div className='lg:w-60 mr-12'>
            <h1 className='text-2xl font-semibold text-[#008000]'>Ebilivie Farm</h1>
            <h5 className='mt-3'>High level experience in web design and development knowledge, producing quality work.</h5>
          </div>
          <div className=''>
            <div className="">
              <p className=''>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
              <div className="sm:flex sm:flex-col sm:justify-center">
                <input type="email" placeholder="Enter your email" className="p-2 px-4 mr-2 bg-[#c4c4c4] rounded-lg mt-5 sm:mb-5" />
                <button className="p-2 px-2 rounded-lg bg-[#008000] text-[white]">Get Started</button>
              </div>
            </div>
          </div>
          <div className="lg:m-3 md:mt-5 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className='sm:my-5'>
              <h5 className='font-bold text-lg'>Follow us</h5>
              <div className='flex mt-3'>
                <i className="bi bi-instagram text-[#f2f8f2] p-2 px-3 rounded-full bg-[#008000] hover:bg-[#23B123]"></i>
                <i className="bi bi-facebook text-[#f2f8f2] p-2 px-3 rounded-full mx-5 bg-[#008000] hover:bg-[#23B123]"></i>
                <i className="bi bi-twitter text-[#f2f8f2] p-2 px-3 rounded-full bg-[#008000] hover:bg-[#23B123]"></i>
              </div>
            </div>
            <div className='lg:mt-5'>
              <h5 className='font-semibold text-lg'>Contact us</h5>
              <p className='my-3'>08109995607</p>
              <p>ebilviefarm@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='lg:mt-20 md:mt-20 sm:mt-16' />
        <div className='lg:p-5 md:p-5 flex justify-between sm:flex-col-reverse sm:justify-center sm:items-center'>
          <div className='sm:mt-5'>
            <p className='md:text-xs'>&copy; 2021 All Rights Reserved</p>
          </div>
          <div className='sm:mt-2'>
            <ul className='flex justify-evenly md:text-xs md:flex-row'>
              <li><Link to={'#'}>Privacy Policy</Link></li>
              <li><Link to={'#'} className='mx-3'>Sales and Refund</Link></li>
              <li><Link to={'/admin'} className=''>Admin</Link></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer
