import Banner from "../Banner/Banner";
import backgroundImage from "../../img/Home-background-image.png";
import backgroundSw from "../../img/wedding-venue.jpg";
import AboutHotel from "../AboutHotel/AboutHotel";
import Swiper from "../Swiper/Swiper";

function Home() {
  const handleReserveClick = () => {
    console.log("Reserve button clicked!");
  };

  return (
    <>
      <Banner
        imageUrl={backgroundImage}
        title="A Memorable Experience."
        buttonText="Reserve Now"
        onButtonClick={handleReserveClick}
      />
      <div className="px-5 py-24 ">
        <AboutHotel />
      </div>
      <Banner
        imageUrl={backgroundSw}
        title="event & weddings"
      />
      <div className="px-10 py-24 ">
        <Swiper />
      </div>
    </>
  );
}

export default Home;
