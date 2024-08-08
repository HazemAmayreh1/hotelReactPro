import style from "./Footer.module.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={`bg-gray-100 text-gray-600 py-8 ${style.footer}`} style={{ borderTop: '1px solid #eaeaea' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Hotel Lunar</h2>
            <p className="text-xs md:text-sm mb-2 text-gray-600">will give you the comfort you deserve</p>
            <p className="text-sm md:text-base text-gray-600">Address: Road 12, Peace Avenue, Ado, Ekiti</p>
            <p className="text-sm md:text-base text-gray-600">
              Phone number: <a href="tel:+2349061504648" className="text-blue-500 hover:underline">+2349061504648</a>
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Email: <a href="mailto:oluwadamilolafaj@gmail.com" className="text-blue-500 hover:underline">oluwadamilolafaj@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Quick Links</h3>
              <ul className="list-none p-0">
                <li className="mb-1"><Link to="/" className="text-sm md:text-base text-blue-500 hover:underline">HOME</Link></li>
                <li className="mb-1"><Link to="/room" className="text-sm md:text-base text-blue-500 hover:underline">ROOMS & RATES</Link></li>
                <li className="mb-1"><Link to="/facilities" className="text-sm md:text-base text-blue-500 hover:underline">FACILITIES</Link></li>
                <li className="mb-1"><Link to="/contacts" className="text-sm md:text-base text-blue-500 hover:underline">CONTACT US</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Social Media</h3>
              <ul className="list-none p-0">
                <li className="mb-1"><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:underline">FACEBOOK</a></li>
                <li className="mb-1"><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:underline">INSTAGRAM</a></li>
                <li className="mb-1"><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:underline">TWITTER</a></li>
                <li className="mb-1"><a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-blue-500 hover:underline">SNAPCHAT</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
