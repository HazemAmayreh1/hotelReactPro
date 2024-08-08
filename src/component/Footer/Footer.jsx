import style from "./Footer.module.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={`bg-gray-100 text-gray-600 py-8 ${style.footer}`} style={{ borderTop: '1px solid #eaeaea' }}>
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Hotel Lunar</h2>
        <p className="text-xs md:text-sm mb-2 text-gray-600">Providing comfort you deserve.</p>
        <address className="text-sm md:text-base text-gray-600 not-italic">
          Address: Road 12, Peace Avenue, Ado, Ekiti<br/>
          <a href="tel:+2349061504648" className="text-blue-500 hover:text-gray-900">+2349061504648</a><br/>
          <a href="mailto:oluwadamilolafaj@gmail.com" className="text-blue-500 hover:text-black">oluwadamilolafaj@gmail.com</a>
        </address>
        <p className="text-sm md:text-base text-gray-800 font-medium"> &copy;2024 Hazem, Saif, Ro'a, and Dunia. All Rights Reserved</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-1"><Link to="/" className="text-sm md:text-base text-blue-500 hover:text-black" aria-label="Home">HOME</Link></li>
            <li className="mb-1"><Link to="/room" className="text-sm md:text-base text-blue-500 hover:text-black" aria-label="Rooms and Rates">ROOMS & RATES</Link></li>
            <li className="mb-1"><Link to="/facilities" className="text-sm md:text-base text-blue-500 hover:text-black" aria-label="Facilities">FACILITIES</Link></li>
            <li className="mb-1"><Link to="/contacts" className="text-sm md:text-base text-blue-500 hover:text-black" aria-label="Contact Us">CONTACT US</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Social Media</h3>
          <ul className="list-none p-0">
            <li className="mb-1"><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:text-black">FACEBOOK</a></li>
            <li className="mb-1"><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:text-black">INSTAGRAM</a></li>
            <li className="mb-1"><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:text-black">TWITTER</a></li>
            <li className="mb-1"><a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:text-black">SNAPCHAT</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
