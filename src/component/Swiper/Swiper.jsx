import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Swiper.module.css";
import seaImg from "../../img/sea-view-penthouse-suite-1 1.png";
import familyImg from "../../img/family suite 1.png";
import deluxeImg from "../../img/Deluxe Suite with Balcony - bedroom - Private panoramas 1.png";
import superImg from "../../img/superior room 1.png";

const imageUrls = [deluxeImg, familyImg, seaImg, superImg];

// Custom next arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return <button className={styles.arrow} onClick={onClick}>→</button>;
};

// Custom previous arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return <button className={styles.arrow} onClick={onClick}>←</button>;
};

const Swiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow
  };

  return (
    <div className={styles.container}>
      <h2>Our Galleries</h2>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className={styles.swiperSlide}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Swiper;
