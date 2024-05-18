import { getFirestore, collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import app from "../config/firebase"
import { useState, useEffect, useContext } from "react"
import ModeContext from "./ModeContext"
const db = getFirestore(app)


const Admin = () => {
    const [orders, setOrders] = useState()
    const { darkMode } = useContext(ModeContext)
    useEffect(() => {
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
        <div className='lg:my-12'>
            <h1 className='text-1xl font-bold mb-10 text-center text-3xl'>Placed Orders</h1>
            <div className="flex flex-wrap justify-center">
                {orders?.map(order => (
                    <div key={order.id} className={`lg:p-10 m-3 md:p-5 lg:mr-5 mb-5 ${darkMode ? 'border border-forestGreen' : 'bg-semiLight'} rounded-xl w-80 md:max-w-48 sm:p-5`}>
                        <h3 className="text-2xl md:text-lg font-semibold">{order.name}</h3>
                        <p className="my-5">{order.package.description}</p>
                        <h1 className="text-3xl md:text-xl font-bold">₦{order.package.price}</h1>
                        <p className="my-5">{order.date}</p>
                        <p className="font-semibold text-lg sm:text-sm my-2">Delivered: {order.delivered.toString()}</p>
                        <button className="hover:bg-forestGreen lg:p-5 md:p-2 sm:p-2 hover:text-light lg:text-1xl lg:font-bold rounded-lg border border-forestGreen">Contact Customer</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin
