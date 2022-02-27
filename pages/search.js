import {useState,useEffect,useRef} from 'react';
import Link from "next/link";
import Map from "/src/components/Map";


const Search = (props) => {

  const [searchData,setSearchData] = useState({pickUp: '', dropOff: ''});



  return (
    <div className="page-wrapper flex flex-col">
    <div className="fixed top-5 left-5 bg-white shadow-lg rounded-full z-50 h-10 w-10 flex items-center justify-center">
        <Link href="/">
          <button><i className="fas fa-arrow-left"></i></button>
        </Link>
    </div>
       <Map />
      <section className="bg-white flex-1  space-y-4">

      <div className="flex  px-4 space-x-2">
         <div  className="flex flex-col justify-center items-center py-5"> 
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="flex-1  border-l border-gray-200"></div>
          <div className="h-2 w-2  bg-gray-500"></div> 
        </div>

        <form className="py-2 space-y-2 relative w-full">
          <div className="form-group">
              <input type="text" 
                className="form-control " 
                placeholder="Enter pickup location"  
                onChange={(e) => setSearchData({...searchData,pickUp: e.target.value})}/>
          </div>

          <div className="form-group">
              <input type="text" 
                className="form-control " 
                placeholder="Where to?" 
                onChange={(e) => setSearchData({...searchData,dropOff: e.target.value})} />
          </div>
        </form>


         <div  className="flex flex-col justify-center items-center py-4"> 
            <button className="text-3xl text-gray-500">
              <i className="fas fa-plus-circle"></i>
            </button>
        </div>
      </div>

      <div className="px-4 py-2 flex space-x-2 items-center font-bold">
        <button className="h-8 w-8 text-white bg-gray-200 rounded-full">
          <i className="fas fa-star"></i>
        </button>
        <span>Saved Places</span>
      </div>


      <div className="bg-white px-4 py-2  flex space-x-2 items-center font-bold">
      <Link href={{
        pathname: "/confirm",
        query: {
          pickup: searchData.pickUp,
          dropoff: searchData.dropOff
        }
      }}>
        <button className="bg-black w-full text-center text-white py-2">
          Confirm Location
        </button>
      </Link>
      </div>
      </section>

    </div>
  )
}

export default Search;