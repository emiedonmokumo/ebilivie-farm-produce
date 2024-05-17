import { useContext } from 'react'
import ModeContext from './ModeContext'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { darkMode } = useContext(ModeContext)
  return (
    <div className={`${darkMode ? 'bg-OxfordBlue2 text-semiLight' : 'bg-semiLight text-oxfordBlue'} text-sm pt-12`}>
      <div className='container mx-auto p-5'>
        <div className="flex justify-evenly items-center">
          <div className='w-60 mr-12'>
            <h1 className='text-2xl font-semibold text-forestGreen'>Ebilivie Farm</h1>
            <h5 className='mt-3'>High level experience in web design and development knowledge, producing quality work.</h5>
          </div>
          <div className=''>
            <div className="">
              <p className=''>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
              <div className="">
                  <input type="email" placeholder="Enter your email" className="p-2 px-4 mr-2 bg-lightGray rounded-sm mt-5" />
                  <button className="p-2 px-2 rounded-sm bg-forestGreen text-light">Get Started</button>
              </div>
            </div>
          </div>
          <div className='ml-10'>
            <h5>Follow us</h5>
            <div className='flex mt-3'>
              <i className="bi bi-instagram text-semiLight p-2 px-3 rounded-full bg-forestGreen hover:bg-lightGreen"></i>
              <i className="bi bi-facebook text-semiLight p-2 px-3 rounded-full mx-5 bg-forestGreen hover:bg-lightGreen"></i>
              <i className="bi bi-twitter text-semiLight p-2 px-3 rounded-full bg-forestGreen hover:bg-lightGreen"></i>
            </div>
          </div>
          <div className='ml-5'>
            <h5 className='font-semibold'>Call on us</h5>
            <p className='mt-3'>+2348109995607</p>
          </div>
        </div>
        <hr className='py-5 mt-20' />
        <div className='flex justify-between'>
          <div>
            <p>&copy; 2021 All Rights Reserved</p>
          </div>
          <div>
            <ul className='flex justify-evenly'>
              <li><Link to={'#'}>Privacy Policy</Link></li>
              <li><Link to={'#'} className='mx-3'>Terms of use</Link></li>
              <li><Link to={'#'}>Sales and Refund</Link></li>
              <li><Link to={'#'} className='ml-3'>Legal</Link></li>
              <li><Link to={'/admin'} className='ml-3'>Admin</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
