import Banner from "../Banner/Banner";
import backgroundImage from "../../img/Home-background-image.png";
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
    </>
  );
}

export default Home;
