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

  const handleSubmit = async (event) => {
    event.preventDefault();

  
    const apiUrl = `${import.meta.env.VITE_API_URL}/feedbackAPI/insertFeedback/comment/GuestID`;
    try {
      const response = await axios.get(apiUrl);
  
      if (response.status === 200) {
        console.log("API call successful. Status 200 OK.");  
        const responseData = response.data;
        console.log("Response data:", responseData);
  
        if (responseData.guestEmail) {
          localStorage.setItem("guestEmail", responseData.guestEmail); 
          localStorage.setItem("token", responseData.token);
          localStorage.setItem('username', responseData.guestUserName);
          setUserName(responseData.guestUserName);
          toast.success(`Login successful! Welcome, ${responseData.guestEmail}`);
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1500); 
         
        } else {
          toast.error("Login failed: Invalid credentials.");
        }
      } else {
        console.log(`Login failed with status: ${response.statusText}`); 
        toast.error(`Login failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Network Error:", error); 
      toast.error(`Network Error: ${error.message}`);
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
