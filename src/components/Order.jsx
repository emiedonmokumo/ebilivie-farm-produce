import plans from "../config/plans"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import ModeContext from "./ModeContext"

import { getFirestore, collection, addDoc } from 'firebase/firestore'
import app from "../config/firebase"
const db = getFirestore(app)

const Order = () => {
    const { id } = useParams()
    const [disable, setDisable] = useState(false)
    const [orderItem, setOrderItem] = useState(plans.filter(plan => plan.id == id))
    const [info, setInfo] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    })
    
    const { darkMode } = useContext(ModeContext)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setDisable(true)
        try {
            const { name, phone, email, address } = info;
            
            await addDoc(collection(db, 'placedOrders'), {
                name,
                phone,
                email,
                address,
                package: {
                    id: orderItem[0].id,
                    name: orderItem[0].name,
                    price: orderItem[0].price,
                    description: orderItem[0].description,
                    size: orderItem[0].size,
                },
                paymentConfirmed: false,
                delivered: false,
                contacted: false,
                dateOfOrder: Date.now()
            })
            setInfo({
                name: '',
                phone: '',
                email: '',
                address: '',
            })
            alert('Order Successfully Placed... Thank you for you patronage.')
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className="mb-16 ">
        <div className="flex justify-between sm:flex-col-reverse sm:justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col lg:w-2/3 md:w-2/3">
                <div className="flex flex-col my-2">
                    <label htmlFor="" className="text-lightGray mb-3">Name/Business Name</label>
                    <input className={`border-lightGray rounded-lg border p-2 text-oxfordBlue`} type="text" placeholder='John Doe/ John Doe Enterprise' value={info.name} onChange={(e)=>setInfo({...info, name: e.target.value})}/>
                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="" className="text-lightGray mb-3">Phone number</label>
                    <input className={`border-lightGray rounded-lg border p-2 text-oxfordBlue`} type="text" placeholder='0810995607' value={info.phone} onChange={(e)=>setInfo({...info, phone: e.target.value})}/>
                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="" className="text-lightGray mb-3">Email Address</label>
                    <input className={`border-lightGray rounded-lg border p-2 text-oxfordBlue`} type="email" placeholder='Email' value={info.email} onChange={(e)=>setInfo({...info, email: e.target.value})}/>
                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="" className="text-lightGray mb-3">Contact Address</label>
                    <input className={`border-lightGray rounded-lg border p-2 text-oxfordBlue`} type="text" placeholder="24 Inec Road, Kpansia, Yenagoa, Bayelsa State" value={info.address} onChange={(e)=>setInfo({...info, address: e.target.value})}/>
                </div>
                <button type="submit" className="bg-forestGreen text-light mt-5 rounded-lg py-5 hover:bg-lightGreen sm:py-3 sm:text-sm" disabled={disable}>{disable ? 'Submitting...': 'Place Order'}</button>
            </form>
            <div className={`${darkMode ? 'border-forestGreen border text-light' : 'bg-semiLight'} p-5 px-10 md:p-5 rounded-lg lg:ml-5 md:ml-10 sm:mb-5 transition delay-300 duration-300 ease-in-out`}>
                <h1 className="mt-5 text-2xl font-semibold text-center">{orderItem[0].name}</h1>
                <li className="mt-5">{orderItem[0].description}</li>
                <li className="my-5">{orderItem[0].size} Litres</li>
                <h3 className="text-2xl font-semibold">Discount: {orderItem[0].discount}%</h3>
                <h1 className="text-3xl font-bold mt-12 md:text-xl sm:text-lg">Placing order: ₦{orderItem[0].price*orderItem[0].discount/100}</h1>
            </div>
        </div>
    </div>
  )
}

export default Order
