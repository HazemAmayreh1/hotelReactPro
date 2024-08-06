import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <button className={styles.hamburger} onClick={toggleMenu}>
          &#9776; 
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
