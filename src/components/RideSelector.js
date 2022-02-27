import {useState,useEffect} from 'react';
import Link from "next/link";
import {carList} from  "/src/components/CarList";

const RideSelector = ({pickupCoordinate,dropOffCoordinate}) => {

  const [rideDuration,setRideduration] = useState(0);

  useEffect(() => {

    //Calculate the distance between two points
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinate[0]},${pickupCoordinate[1]};${dropOffCoordinate[0]},${dropOffCoordinate[1]}?access_token=pk.eyJ1IjoibWJyYWluIiwiYSI6ImNsMDNtMm9vczA4dDcza3BkYnVlajg0NmkifQ.7fT2s42CFsD1wNTQpZi-7g`)
    .then((res) => res.json())
    .then((res) => {


      setRideduration(res.routes[0].duration / 100);



    })
    .catch((err) => console.log(err.message))

  },[pickupCoordinate,dropOffCoordinate])

  return (
    <>
      <header className="bg-white text-center text-gray-500 font-bold text-sm border-b py-2">
              <h2>Choose a ride, or swipe up for more</h2>
      </header>
      <div className="flex-1 bg-white space-y-4 overflow-y-auto">
          <div className="px-5 space-y-5">


            {carList.map((item,index) => 
              <div className="flex items-center space-x-2" key={index}>
                <div className="">
                  <img src={item.imgUrl} className="h-10 w-10" />
                </div>

                <div className="w-full flex flex-col">
                  <h3 className="text-lg font-bold">{item.service}</h3>
                  <span className="text-sm text-blue-500">5 min away</span>
                </div>

                <div className="text-lg font-bold">
                  ${ (item.multiplier* rideDuration).toFixed(2) }
                </div>
            </div>

            )}
            

             

          </div>
    	    

     </div>


     <div className="bg-white px-4 py-2  flex space-x-2 items-center font-bold">
      <Link href={{
        pathname: "/confirm"
      }}>
        <button className="bg-black w-full text-center text-white py-2">
          Confirm UberX
        </button>
      </Link>
      </div>

     </>
  )
}

export default RideSelector;