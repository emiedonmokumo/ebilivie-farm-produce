import { getFirestore, collection, getDocs } from "firebase/firestore"
import app from "../config/firebase"
import { useState, useEffect, useContext } from "react"
import ModeContext from "./ModeContext"
const db = getFirestore(app)


const Admin = () => {
    const [orders, setOrders] = useState()
    const { darkMode } = useContext(ModeContext)
    useEffect(() =>{
        const fetchOrders = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'placedOrders'));
                const fetchedOrders = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setOrders(fetchedOrders);
            } catch (err) {
                console.error('Error fetching orders:', err.message);
            }
        };
      
        fetchOrders();
    }, [])
    

  return (
    <div className='container mx-auto p-5 py-10 my-12'>
      <h1 className='text-1xl font-bold mb-10 text-center text-3xl'>Placed Orders</h1>
        <div className="flex flex-wrap justify-center">
            {orders?.map(order => (
                <div key={order.id} className={`p-10 mr-5 mb-5 ${darkMode ? 'border border-forestGreen': 'bg-semiLight'} rounded-xl w-80`}>
                    <h3 className="text-2xl font-semibold">{order.name}</h3>
                    <p className="my-5">{order.package.description}</p>
                    <h1 className="text-3xl font-bold">₦{order.package.price}</h1>
                    <p className="my-5">{order.date}</p>
                    <p className="font-semibold text-lg my-2">Delivered: {order.delivered.toString()}</p>
                    <button className="hover:bg-forestGreen p-5 hover:text-light text-1xl font-bold rounded-lg border border-forestGreen">Contact Customer</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Admin
