import React, { useState, useEffect } from "react";
import "./SliderHome.css"; // Assuming you have a CSS file for styling

function RoomImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex]}
        alt="Room"
        className="slider-image"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default RoomImageSlider;
