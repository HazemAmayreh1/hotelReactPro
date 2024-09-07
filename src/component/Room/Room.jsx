import { useContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import bed from "../../img/bed.png";
import { Bounce, toast } from "react-toastify";
import styles from "./Room.module.css";
import { CartContext } from "../../../context/cartContext";
import { useNavigate } from "react-router-dom";  
import axios from "axios"; 
import Loader from "../Loader/Loader"; 

function Room() {
  const { addToCart } = useContext(CartContext);
  const [rooms, setRooms] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/RoomAPI/GetRooms`);
        const availableRooms = response.data.filter(room => !room.status); 
        setRooms(availableRooms); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setLoading(false); 
        toast.error("Failed to load room data");
      }
    };

    fetchRooms();
  }, []);

  const isAuthenticated = () => {
    const guestEmail = localStorage.getItem("guestEmail");  
    return guestEmail;
  };

  const handleBookNow = async (room) => {
    if (isAuthenticated()) {
      setLoading(true);  
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        addToCart(room);  
      } catch (error) {
        console.error("Error booking room:", error);
        toast.error("Failed to book the room.");
      } finally {
        setLoading(false); 
      }
    } else {
      toast.error("You need to be logged in to book a room.");
      navigate("/reg");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Banner imageUrl={bed} title="OUR ROOMS AND RATE" />
      <div className="flex justify-center items-center">
        <div className="px-10 py-24 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {rooms.map((room) => (
            <div
              key={room.roomId}
              className="flex flex-col gap-y-4 h-fit p-6 border border-gray-300 rounded-lg shadow-xl bg-gray-50"
            >
              <div className="flex flex-col text-center gap-y-4">
                <img
                  src={room.roomImage}
                  alt="room photo"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <h1 className="font-bold text-xl text-gray-800">{room.roomName}</h1>
              </div>
              <ul className={styles.type}>
                <li className={styles.featureItem}>
                  {room.bathrooms} bathrooms
                </li>
                <li className={styles.featureItem}>{room.type}</li>
                <li className={`${styles.featureItem} ${styles.lastItem}`}>
                  {room.people} people
                </li>
              </ul>

              <div className="flex justify-between items-center mt-4">
                <h3 className="text-2xl text-gray-800 font-semibold">
                  ${room.price}{" "}
                  <span className="text-lg text-gray-600">per night</span>
                </h3>
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 font-bold"
                  style={{ fontWeight: 700 }}
                  onClick={() => handleBookNow(room)}  
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Room;
