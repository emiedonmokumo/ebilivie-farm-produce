import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ModeContext from "./ModeContext"
import plans from '../config/plans'

const Products = () => {

  const { darkMode } = useContext(ModeContext)
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="px-30 lg:my-12">
      <h1 className={`text-center text-2xl font-bold mb-12`}>Palm Oil Products</h1>
      <div className="flex lg:flex-wrap md:flex-wrap justify-center my-16">
        <img src="/images/istockphoto-539201186-612x612.jpg" className="lg:w-80 md:w-48 rounded-xl" alt="" />
        <img src="/images/istockphoto-539201434-612x612.jpg" className="lg:w-80 md:w-48 rounded-xl mx-5 sm:my-5 lg:my-5" alt="" />
        <img src="/images/istockphoto-649691472-612x612.jpg" className="lg:w-80 md:w-48 rounded-xl md:m-5 lg:my-5" alt="" />
      </div>
      <div className="flex justify-between md:flex-col sm:flex-col mb-12">
      {plans.map(plan => (
        <div key={plan.id} className="relative border-lightGray border hover:border-1 hover:border-lightGreen p-12 sm:p-5 rounded-lg m-3 text-center">
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl font-bold py-2 text-forestGreen">{plan.name}</h3>
            <p className="text-lg">{plan.description}</p>
            <p className="my-5 mt-8 text-2xl font-bold text-lightGray">{plan.size} Litres</p>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-semiLight' : 'text-oxfordBlue'} mt-12 sm:my-5`}>₦{plan.price*plan.discount/100}</h1>
          </div>
          <Link to={`/order/${plan.id}`} className="absolute bottom-0 left-0 right-0 hover:bg-forestGreen p-5 hover:text-light text-1xl font-bold rounded-lg border border-forestGreen">Order</Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products
