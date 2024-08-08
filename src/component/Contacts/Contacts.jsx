import { useState } from 'react';
import Banner from "../Banner/Banner";
import backgroundImage from "../../img/contactBanner.jpg";
import phoneIcon from "../../img/phoneIconGray.png";
import emailIcon from "../../img/email-iconGray.png";
import locationIcon from "../../img/location-iconGray.png";
import styles from './Contacts.module.css';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data", formData);
     //api code 
      

      toast.success("Feedback submitted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Failed to submit feedback. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
     <Banner imageUrl={backgroundImage} title="Contacts Us" />
      <div className={styles.container}>
        <h2 className={styles.header}>We’ll love to hear your feedback. Kindly send us a mail</h2>
       
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            onChange={handleChange}
            value={formData.name}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            onChange={handleChange}
            value={formData.email}
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Type your message"
            required
            onChange={handleChange}
            value={formData.message}
            className={styles.textarea}
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
