import Banner from "../Banner/Banner";
import bed from "../../img/bed.png";
import { room_info } from "../../Array";
import { Bounce, toast } from "react-toastify";
import styles from "./Room.module.css";

function Room() {
  const handleChange = () => {
    toast.success("Booked", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <>
      <Banner imageUrl={bed} title="OUR ROOMS AND RATE" />
      <div className="flex justify-center items-center">
        <div className="px-10 py-24 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {room_info.map((room) => (
            <div
              key={room.id}
              className="flex flex-col gap-y-4 h-fit p-6 border border-gray-300 rounded-lg shadow-xl bg-gray-50"
            >
              <div className="flex flex-col text-center gap-y-4">
                <img
                  src={room.photo_url}
                  alt="room photo"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <h1 className="font-bold text-xl text-gray-800">{room.name}</h1>
              </div>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  {room.bathrooms} bathrooms
                </li>
                <li className={styles.featureItem}>{room.beds} beds</li>
                <li className={`${styles.featureItem} ${styles.lastItem}`}>
                  {room.people} people
                </li>
              </ul>

              <div className="flex justify-between items-center mt-4">
                <h3 className="text-2xl text-gray-800 font-semibold">
                  ${room.price_per_night}{" "}
                  <span className="text-lg text-gray-600">per night</span>
                </h3>
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 font-bold"
                  style={{ fontWeight: 700 }}
                  onClick={handleChange}
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
