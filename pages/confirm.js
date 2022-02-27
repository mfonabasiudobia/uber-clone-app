import {useState,useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import Map from "/src/components/Map";
import RideSelector from "/src/components/RideSelector";


export const ConfirmButton = ({show,hide}) => {
  return (
    <section className={`after:h-screen after:w-screen after:content-[''] after:bg-black after:opacity-60 fixed top-0 left-0 min-h-[100vh] bg-red-100 w-screen flex flex-col justify-center items-center z-50 ${!show && 'hidden'}`}>
      
      <div className="w-1/2 bg-white rounded-2xl p-10">
        <h2>Fare Expired</h2>

        <div>Your fare has expired. Please refresh your fare before requesting a ride.</div>


        <button className="bg-black w-full text-center text-white py-2" onClick={() => hide()}>Cancel</button>
      </div>
  </section>)
}



const Confirm = (props) => {

  const [pickupCoordinate,setPickupCoordinate] = useState([0, 0]);
  const [dropOffCoordinate,setDropOffCoordinate] = useState([0, 0]);
  const {pickup,dropoff} = useRouter().query; //Get query parameter

  const getPickupCoordinate = (pickup) => {

   
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
      new URLSearchParams({
        access_token:"pk.eyJ1IjoibWJyYWluIiwiYSI6ImNsMDNtMm9vczA4dDcza3BkYnVlajg0NmkifQ.7fT2s42CFsD1wNTQpZi-7g",
        limit: 1
      }))
    .then((res) => res.json())
    .then((data) => {
        setPickupCoordinate(data.features[0].center);
    })
  }

  const getDropOffCoordinates = (dropoff) => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
      new URLSearchParams({
        access_token:"pk.eyJ1IjoibWJyYWluIiwiYSI6ImNsMDNtMm9vczA4dDcza3BkYnVlajg0NmkifQ.7fT2s42CFsD1wNTQpZi-7g",
        limit: 1
      }))
    .then((res) => res.json())
    .then((data) => {
      setDropOffCoordinate(data.features[0].center);
    })


  }


  useEffect(() => {

    getPickupCoordinate(pickup);
    getDropOffCoordinates(dropoff);

  },[pickup,dropoff]);


  return (
    <div className="page-wrapper flex flex-col">

      <div className="fixed top-5 left-5 bg-white shadow-lg rounded-full z-20 h-10 w-10 flex items-center justify-center">
        <Link href="/search">
          <button><i className="fas fa-arrow-left"></i></button>
        </Link>
      </div>

      <Map 
        pickupCoordinate={pickupCoordinate}
        dropOffCoordinate={dropOffCoordinate}
      />

      <RideSelector
        pickupCoordinate={pickupCoordinate}
        dropOffCoordinate={dropOffCoordinate}
         />

    </div>
  )
}

export default Confirm;