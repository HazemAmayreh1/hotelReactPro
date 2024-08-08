import Banner from "../Banner/Banner";
import Facilitiesimage from "../../img/Facilities.jpg";
import { room_info } from "../../Array";


function Facilities() {
  return (
    <>
      <Banner
        imageUrl={Facilitiesimage}
        title="FACILITIES"
      />
      <div className="flex justify-center items-center">
        <div className="px-10 py-24 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {room_info.map(room => (
            <div key={room.id} className="flex flex-col gap-y-4 h-fit p-4 border border-gray-200 rounded-lg shadow-lg">
              <div className="flex flex-col text-center gap-y-4">
                <img src={room.photo_url} alt="photo" className="w-full h-80 rounded-lg" />
                <h1 className="font-bold text-2xl text-gray-800">Classic Standard Room</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Facilities