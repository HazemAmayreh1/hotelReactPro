import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"; 
import profile from "../../img/pngProfile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSignOutAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState(null); 
  const navigate = useNavigate();

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
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("guestEmail");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername(null);
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          Hotel Lunar
        </Link>

        <div className={`${styles.linkContainer} ${isOpen ? styles.active : ""}`}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/room" className={styles.link}>
            Rooms & Suites
          </Link>
          <Link to="/facilities" className={styles.link}>
            Facilities
          </Link>
          <Link to="/contacts" className={styles.link}>
            Contacts
          </Link>
        </div>

        <div className={styles.dropdown}>
          <button
            className={styles.dropBtn}
            onClick={toggleDropdown}
          >
            <div className="flex items-center">
              {!isLoggedIn ? (
                <img
                  src={profile}
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium text-sm">Welcome,</span>
                  <h6 className="text-gray-900 font-bold text-base hover:text-gray-600 transition-colors duration-300">
                    {username}
                  </h6>
                  <FontAwesomeIcon icon={faUser} className="ml-2 text-gray-600" /> {/* Profile icon */}
                </div>
              )}
            </div>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdownContent}>
              {!isLoggedIn ? (
                <>
                  <Link to="/login" className={styles.dropdownItem}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" /> Login
                  </Link>
                  <Link to="/reg" className={styles.dropdownItem}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" /> Register
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/cart" className={styles.dropdownItem}>
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
                  </Link>
                  <Link to="/order" className={styles.dropdownItem}>
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Orders
                  </Link>
                  <button onClick={handleLogout} className={styles.logoutbtn}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
