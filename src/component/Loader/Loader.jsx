import React from 'react';
import './Loader.css'; // Import the CSS file for styling

function Loader() {
  return (
    <div className="loader-container">
      {/* Add your text instead of the image */}
      <div className="loader-text">
        صبرا جميل والله المستعان على ما تصفون
      </div>
      {/* Spinner will remain */}
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
