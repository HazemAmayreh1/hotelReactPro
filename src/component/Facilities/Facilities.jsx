import Banner from "../Banner/Banner";
import Facilitiesimage from "../../img/Facilities.jpg";
import { room_info } from "../../Array";
import styles from './Facilities.module.css';
import {useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Facilities() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/RoomAPI/GetRooms`);
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setLoading(false);
        toast.error("Failed to load room data");
      }
    };

    fetchRooms();
  }, []);
  return (
    <>
      <Banner
        imageUrl={Facilitiesimage}
        title="FACILITIES"
      />
      <div className="flex justify-center items-center">
        <div className="px-10 py-24 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {rooms.map(room => (
            <div key={room.roomId} className="flex flex-col gap-y-4 h-fit p-4 border border-gray-200 rounded-lg shadow-lg">
              <div className="flex flex-col text-center gap-y-4">
                <img src={room.roomImage} alt="photo" className="w-full h-80 rounded-lg" />
                <h1 className="font-bold text-2xl text-gray-800">{room.type}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
            <h2 className={styles.header}>We also offer:</h2>
            <div className={styles.grid}>
                <div>
                    <p className={styles.para}>Library services</p>
                    <p className={styles.para}>Free Wi-fi</p>
                    <p className={styles.para}>Adequate safety/security</p>
                    <p className={styles.para}>Laundry services</p>
                </div>
                <div>
                    <p className={styles.para}>Delicious meals</p>
                    <p className={styles.para}>Air cooling in all rooms</p>
                    <p className={styles.para}>Room services</p>
                    <p className={styles.para}>Ticket books</p>
                </div>
                <div>
                    <p className={styles.para}>Shuttle/ Private transfers</p>
                    <p className={styles.para}>Necessities for babies and children</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Facilities