import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../../context/cartContext";
import styles from './CartPage.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import Loader from '../Loader/Loader'; 

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use navigate for routing

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/RoomAPI/GetRooms`);
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        toast.error("Failed to load room data");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleRemove = (roomId) => {
    removeFromCart(roomId);
  };

  const handleAcceptOrder = () => {
    // Navigate to the order page, passing the cart information
    navigate('/order', { state: { cart } });
  };

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className={`min-w-full bg-white border border-gray-300 ${styles.responsiveTable}`}>
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Image</th>
                  <th className="py-2 px-4 border-b">Hotel Name</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((room) => (
                  <tr key={room.roomId}>
                    <td className="py-2 px-4 border-b">
                      <img
                        src={room.roomImage}
                        alt="room"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">{room.roomName}</td>
                    <td className="py-2 px-4 border-b">${room.price}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleRemove(room.roomId)} 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition ease-in-out"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleAcceptOrder}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition ease-in-out"
            >
              Proceed to Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
