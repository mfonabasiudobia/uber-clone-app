import {useEffect} from "react";
import mapboxgl from "!mapbox-gl";

const {NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN} = process.env;

mapboxgl.accessToken = NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Home = ({pickupCoordinate,dropOffCoordinate}) => {


   const addToMap = (map,coordinates) => new mapboxgl.Marker().setLngLat(coordinates).addTo(map);


   useEffect(() => {

      const map = new mapboxgl.Map({
                container: "map",
                style: 'mapbox://styles/mapbox/satellite-streets-v11',
                center: [-99.29011, 39.39172],
                zoom: 1
                });

      if(pickupCoordinate){
          addToMap(map,pickupCoordinate); //Add pickup Location here
      } 

      if(dropOffCoordinate){
          addToMap(map,dropOffCoordinate); //Add drop off Location here
      } 

      if(pickupCoordinate && dropOffCoordinate){
        map.fitBounds([pickupCoordinate,dropOffCoordinate],//this line zooms the map to fit the coordinates
        {
          padding: 60
        }
        ); 
      }

  },[pickupCoordinate,dropOffCoordinate])

 
  return (
    <>
        <div className="flex-1" id="map"></div>
    </>
  )
}


export default Home;
