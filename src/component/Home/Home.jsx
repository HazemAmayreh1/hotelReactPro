import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import backgroundImage from "../../img/memorable-guest-experience.png";
import backgroundSw from "../../img/wedding-venue.jpg";
import AboutHotel from "../AboutHotel/AboutHotel";
import Swiper from "../Swiper/Swiper";
import RoomImageSlider from "../SliderHome/SliderHome";
import Loader from "../Loader/Loader"; 
import styles from './Home.module.css';

function Home() {
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
      }
    };

    fetchRooms();
  }, []);

  const handleReserveClick = () => {
    console.log("Reserve button clicked!");
  };

  if (loading) {
    return <Loader />; 
  }

  return (
    <>
       
      <Banner
        imageUrl={backgroundImage}
        title="A Memorable Experience."
        buttonText="Reserve Now"
        onButtonClick={handleReserveClick}
      />
      <div className="px-5 py-24 ">
        <AboutHotel />
      </div>
      <Banner imageUrl={backgroundSw} title="Event & Weddings" />
      
      <div className="px-10 py-24">
        <h2 className={styles.slidertitle}>Our Rooms</h2>
        {rooms.length > 0 ? (
          <RoomImageSlider images={rooms.map((room) => room.roomImage)} /> 
        ) : (
          <p>No rooms available at the moment.</p>
        )}
      </div>
   

      <div className="px-10 py-24">
        <Swiper />
      </div>
    </>
  );
}

export default Home;
