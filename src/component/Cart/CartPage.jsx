import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../../context/cartContext";
import styles from './CartPage.module.css'; 

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (roomId) => {
    removeFromCart(roomId);
    toast.info("Removed from Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className={`min-w-full bg-white border border-gray-300 ${styles.responsiveTable}`}>
            <thead>
              <tr>
                <th className=" py-2 px-4 border-b">Image</th>
                <th className=" py-2 px-4 border-b">Hotel Name</th>
                <th className=" py-2 px-4 border-b">Price</th>
                <th className=" py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((room) => (
                <tr key={room.id}>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={room.photo_url}
                      alt="room"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{room.name}</td>
                  <td className="py-2 px-4 border-b">${room.price_per_night}</td>
                  <td className="py-2 px-4 border-b">
                  <button
                      onClick={() => handleRemove(room.id)}
                      className={`${styles.smallButton} bg-red-500 text-white rounded-lg hover:bg-red-600 transition`}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CartPage;
