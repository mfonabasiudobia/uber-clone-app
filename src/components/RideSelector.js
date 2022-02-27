import {useState,useEffect} from 'react';
import Link from "next/link";
import {carList} from  "/src/components/CarList";



export const ConfirmButton = ({show,hide}) => {
  return (
    <section className={`after:h-screen after:z-[1000] after:w-screen after:fixed after:content-[''] after:bg-black after:opacity-60 fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center ${!show && 'hidden'}`}>
      
      <div className="w-1/2 bg-white rounded-2xl p-7 space-y-5 relative z-[2000]">
        <h2 className="text-xl font-bold">Fare Expired</h2>

        <div>Your fare has expired. Please refresh your fare before requesting a ride.</div>

        <button className="bg-black w-full text-center text-white py-2" onClick={() => hide()}>Cancel</button>
      </div>
  </section>)
}

const RideSelector = ({pickupCoordinate,dropOffCoordinate}) => {

  const [rideDuration,setRideduration] = useState(0);
  const [selected,setSelected] = useState(0);
  const [show,setShow] = useState(false);

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

      <ConfirmButton show={show} hide={() => setShow(!show)} />


      <header className="bg-white text-center text-gray-500 font-bold text-sm border-b py-2">
              <h2>Choose a ride, or swipe up for more</h2>
      </header>
      <div className="flex-1 bg-white overflow-y-auto">
        


            {carList.map((item,index) => 
              <div className={`flex items-center space-x-2 cursor-pointer px-5 py-2.5 ${index == selected && 'border-2 border-gray-200'}`} key={index} onClick={() => setSelected(index)}>
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


     <div className="bg-white px-4 py-2  flex space-x-2 items-center font-bold">
      <Link href={{
        pathname: "/confirm"
      }}>
        <button className="bg-black w-full text-center text-white py-2" onClick={() => setShow(!show)}>
          Request {carList[selected].service}
        </button>
      </Link>
      </div>

     </>
  )
}

export default RideSelector;