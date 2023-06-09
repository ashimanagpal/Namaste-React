import { RestaurantList } from "../constant";
import Restruntcard from "./RestraurantCard";
import { useEffect, useState, useContext} from "react";
import Shimmer from "./shimmer";
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import Crousal from "./Crousal";
import {filterData} from "../utils/Helper"
import useOnline from "../hooks/useOnline";


const Body = ({user1}) => {
  console.log("userbodyyyyyyyyy start" , user1);
  const [allrestaurants, SetAllRestaurants] = useState([]);
  const [filteredrestaurants, SetFilteredRestaurants] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const {user,setUser}= useContext(UserContext)

  useEffect(() => {
    //api call
    getrestaurants();
  }, []);

  async function getrestaurants() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3610314&lng=76.8485468&page_type=DESKTOP_WEB_LISTING"
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6236338&lng=76.8057776&page_type=DESKTOP_WEB_LISTING"
    );
    const JsonData = await data.json();
    console.log(JsonData);
    SetAllRestaurants(JsonData?.data?.cards[2]?.data?.data?.cards);
    SetFilteredRestaurants(JsonData?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("Body Component render()"); // this will call whenever component will load

  //(early return)...... when i dont have res don't return anything
  if (!allrestaurants) return <h1>All restaurant are not there</h1>;

  const isOnline = useOnline();

  if(!isOnline) {
    return <div className="offline-status"> <h2>🔴 Connection Error</h2>
    <p>  Please check your internet connection and try again.</p></div>
  }

  
  // if(filteredrestaurants?.length == 0) return <h1>No restaurant match your filter</h1>;
  return allrestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
    <Crousal/>
    
      <div className="flex justify-center p-2 my-3">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            SetSearchText(e.target.value);
          }}
        />

        <button data-testid="search-btn"
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allrestaurants);
            //Update the state - restaurants
            SetFilteredRestaurants(data);
          }}
        >
          {" "}
          Search{" "}
        </button> 
        
      </div>
      
      <div className="flex gap-4 flex-wrap  justify-center p-2 cart-body">
        {/*Write Logic here when no restaurant found while we search */}
        {filteredrestaurants?.length == 0 ? 
        (<h1 className="no-rest">No Restaurant Found</h1>) : (
          <>
          {filteredrestaurants.map((restaurant) => {
          return (
            <Link
              to={"/RestaurantMenu/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <Restruntcard {...restaurant.data} userrc= {user1} />
              
            </Link>
          );
        })
        }
          </>
        )}




        
      </div>
    </>
  );
};


export default Body;
