import styles from "./AboutHotel.module.css";
import HotelImage from "../../img/swaming.jpg";
import { Link } from "react-router-dom";

function AboutHotel() {
  return (
    <div>
      <div className={styles.hotelLunar}>
        <div className={styles.container}>
          <div className={styles.hotelInfo}>
            <h1>
              About <span>Hotel Lunar</span>
            </h1>
            <p>
              Ladies and gentlemen, history keeps repeating itself but doesn’t
              teach us any lessons. Never again has turned into ‘again and again
              and again’. So today, ladies and gentlemen, take Hotel Lunar as a
              wake-up call and a message to be our messenger that people are the
              ones who can change what they want to change.
            </p>
            <p>
              Ladies and gentlemen, history keeps repeating itself but doesn’t
              teach us any lessons. Never again has turned into ‘again and again
              and again’. So today, ladies and gentlemen, take Hotel Lunar as a
              wake-up call and a message to be our messenger that people are the
              ones who can change what they want to change.
            </p>
            <button><Link to="/aboutus" >About Us</Link></button>
            
             
          </div>
          <div className={styles.hotelImage}>
            <img src={HotelImage} alt="Standard Single Room" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHotel;
