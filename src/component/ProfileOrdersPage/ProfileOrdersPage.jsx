import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { CartContext } from "../../../context/cartContext"; 
import Loader from "../Loader/Loader"; 

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext); 
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestId, setGuestId] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedGuestId = localStorage.getItem('guestId');
    if (!storedGuestId) {
      toast.error("Guest ID not found. Please log in.");
      navigate("/login"); 
    } else {
      setGuestId(storedGuestId);
      fetchReservations(storedGuestId); 
    }
  }, [navigate]);

  const fetchReservations = async (guestId) => {
    setLoading(true); 
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/Reservation/getReservations/${guestId}`);
      setReservations(response.data); 
    } catch (error) {
     console.log("Error fetching reservations.");
    } finally {
      setLoading(false); 
    }
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    if (!guestId) {
      toast.error("Guest ID not found. Please log in.");
      return;
    }

    const encodedStartDate = encodeURIComponent(checkInDate);
    const encodedEndDate = encodeURIComponent(checkOutDate);

    try {
      setLoading(true); 
      for (const room of cart) {
        const roomId = room.roomId;
        if (!roomId) {
          toast.error("Room ID is missing for one or more rooms.");
          return;
        }

        const encodedRoomId = encodeURIComponent(roomId);
        const amount = room.price;

        const apiUrl = `${import.meta.env.VITE_API_URL}/Reservation/createReservation/${encodedStartDate}/${encodedEndDate}/${amount}/${guestId}/${encodedRoomId}`;

        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          toast.success("Reservation created successfully for room " + room.roomName);
        } else {
          toast.error(`Failed to create reservation: ${response.statusText}`);
        }
      }

      clearCart(); 
      fetchReservations(guestId);
    } catch (error) {
      console.error("Error creating reservation:", error);
      toast.error(`Error creating reservation: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelReservation = async (reservationId) => {
    setLoading(true); 
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/Reservation/cancelReservation/${reservationId}`);
      if (response.status === 200) {
        toast.success("Reservation canceled successfully.");
        fetchReservations(guestId); 
        setTimeout(() => {
          window.location.reload(); 
        }, 1000); 
      } else {
        toast.error(`Failed to cancel reservation: ${response.statusText}`);
      }
    } catch (error) {
      toast.error("Error canceling reservation.");
    } finally {
      setLoading(false); 
    }
  };

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Finalize Your Order</h1>
      {cart && cart.length > 0 ? (
        <form onSubmit={handleOrderSubmit}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Check-In Date:
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Check-Out Date:
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition ease-in-out"
          >
            Confirm Order
          </button>
        </form>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h2 className="text-2xl font-bold mt-10">Your Reservations</h2>
      {reservations.length > 0 ? (
        <div className="mt-4">
          <table className="min-w-full bg-white border border-gray-300 text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Room Name</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Start Date</th>
                <th className="py-2 px-4 border-b">End Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.reservationId}>
                  <td className="py-2 px-4 border-b">{reservation.roomId}</td>
                  <td className="py-2 px-4 border-b">${reservation.totalAmount}</td>
                  <td className="py-2 px-4 border-b">{reservation.startDate}</td>
                  <td className="py-2 px-4 border-b">{reservation.endDate}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition ease-in-out"
                      onClick={() => handleCancelReservation(reservation.reservationId)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
}

export default OrderPage;
