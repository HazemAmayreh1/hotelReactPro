import { useState } from 'react';
import axios from 'axios';
import Banner from "../Banner/Banner";
import backgroundImage from "../../img/contactBanner.jpg";
import phoneIcon from "../../img/phoneIconGray.png";
import emailIcon from "../../img/email-iconGray.png";
import locationIcon from "../../img/location-iconGray.png";
import Loader from "../Loader/Loader";  
import styles from './Contacts.module.css';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contacts() {
  const [formData, setFormData] = useState({
    comment: '' 
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);  

    const GuestId = localStorage.getItem('guestId'); 

    if (!GuestId) {
      setLoading(false);
      toast.error('Guest ID not found. Please log in.');
      return;
    }
  
    const encodedComment = encodeURIComponent(formData.comment);
  
    const apiUrl = `${import.meta.env.VITE_API_URL}/feedbackAPI/insertFeedback/comment/${GuestId}?comment=${encodedComment}`;
  
    try {
      const response = await axios.get(apiUrl);
  
      if (response.status === 200) {
        toast.success("Message sent successfully! Thank you for your feedback.", {
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
        setFormData({ comment: '' });
      } else {
        toast.error(`Failed to send message: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error(`Network Error: ${error.message}`);
    } finally {
      setLoading(false);  
    }
  };

  return (
    <>
      {loading && <Loader />} 
      <Banner imageUrl={backgroundImage} title="Contact Us" />
      <div className={styles.container}>
        <h2 className={styles.header}>We’d love to hear your feedback. Kindly send us a message.</h2>
       
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="Your comment"
            required
            onChange={handleChange}
            value={formData.comment}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>SEND MESSAGE</button>
        </form>
      </div>

      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <img src={phoneIcon} alt="Phone" className={styles.icon} />
          <span>+2349061504648</span>
        </div>
        <div className={styles.contactItem}>
          <img src={emailIcon} alt="Email" className={styles.icon} />
          <span>oluwadamilolafaj@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <img src={locationIcon} alt="Location" className={styles.icon} />
          <span>Road 12, Peace Avenue, Ado, Ekiti</span>
        </div>
      </div>
    </>
  );
}

export default Contacts;
