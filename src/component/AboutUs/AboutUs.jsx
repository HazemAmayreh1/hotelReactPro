import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader"; 

function AboutUs() {
  const [hotel, setHotel] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchHotelInfo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/HotelAPI/getHotel`);
        setHotel(response.data[0]); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotel information:", error);
        setLoading(false);
      }
    };

    fetchHotelInfo();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!hotel) {
    return <p>No hotel information available.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">{hotel.hotelName}</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img
            src={hotel.hotelImage}
            alt="Hotel"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-lg text-gray-700 mb-4">{hotel.hotelDescription}</p>

          <div className="text-lg text-gray-600 mb-2">
            <strong>Phone Number: </strong>{hotel.hotelPhoneNumber}
          </div>

          <div className="text-lg text-gray-600">
            <strong>Email: </strong>{hotel.hotelEmail.trim()} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
