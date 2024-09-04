import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import profile from "../../img/pngProfile.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState(null); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    const token = localStorage.getItem("guestEmail");
    if (token) {
      setIsLoggedIn(true);  
    }
  }, []);
  useEffect(() => {
    const storedNameUserName = localStorage.getItem("username");
    if (storedNameUserName) {
      setUsername(storedNameUserName);  
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('guestEmail');
    localStorage.removeItem('username');    
    setIsLoggedIn(false);
    setUsername(null);   
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1 className={styles.logo}>Hotel Lunar</h1>
        
        <div className={`${styles.linkContainer} ${isOpen ? styles.active : ''}`}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/room" className={styles.link}>Rooms & Suites</Link>
          <Link to="/facilities" className={styles.link}>Facilities</Link>
          <Link to="/contacts" className={styles.link}>Contacts</Link>
        </div>
        <div className={styles.dropdown}>
        <button className="rounded-full overflow-hidden border-2 border-white focus:outline-none focus:border-gray-700" onClick={toggleDropdown}>
       {!isLoggedIn ? <img src={profile} alt="Profile" className="h-8 w-8 rounded-full object-cover"/>:<h6 className={styles.link}>{username}</h6>} 
        </button>
        {dropdownOpen && (
        <div className={styles.dropdownContent}>
          
          {!isLoggedIn ? ( 
            <>
              <Link to="/login" className={styles.dropdownItem}>Login</Link>
              <Link to="/reg" className={styles.dropdownItem}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/Cart" className={styles.dropdownItem}>Carts</Link>
              <Link to="/order" className={styles.dropdownItem}>Orders</Link>
              <button onClick={handleLogout} className={styles.logoutbtn}>Logout</button>
            </>
          )}
        </div>
      )}
          </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
