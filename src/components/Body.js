import { RestaurantList } from "../constant";
import Restruntcard from "./RestraurantCard";
import { useEffect, useState, useContext} from "react";
import Shimmer from "./shimmer";
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";


function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = ({user1}) => {
  console.log("userbodyyyyyyyyy start" + user1);
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6236338&lng=76.8057776&page_type=DESKTOP_WEB_LISTING"
    );
    const JsonData = await data.json();
    console.log(JsonData);
    SetAllRestaurants(JsonData?.data?.cards[2]?.data?.data?.cards);
    SetFilteredRestaurants(JsonData?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("Body Component render()"); // this will call whenever component will load

  //(early return)...... when i dont have res don't return anything
  if (!allrestaurants) return <h1>All restaurant are not there</h1>;

  // if(filteredrestaurants?.length == 0) return <h1>No restaurant match your filter</h1>;

  return allrestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center p-2">
        <input
          type="text"
          className="border-2 p-1"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            SetSearchText(e.target.value);
          }}
        />

        <button
          className="bg-green-600 rounded-sm text-white p-1"
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

        {/* <input className="border border-r m-2" value={user.name} onChange={
          e => setUser({
            ...user,
            name: e.target.value
          })
          }></input>
          <input className="border border-r m-2" value={user.email} onChange={
          e => setUser({
            ...user,
            email: e.target.value
          })
          }></input> */}
      </div>

      <div className="flex gap-4 flex-wrap border rounded-md justify-center p-2 ">
        {/*Write Logic here when no restaurant found while we search */}
        {filteredrestaurants.map((restaurant) => {
          console.log("inside body gggggggggggggggggggggg"  +  user1);
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
      </div>
    </>
  );
};


export default Body;
