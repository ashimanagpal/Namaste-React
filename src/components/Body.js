import { RestaurantList } from "../constant";
import Restruntcard from "./RestraurantCard";
import {useState} from "react";

const Body = () => {
  const [searchText, SetSearchText] = useState("Search");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange = {(e) =>{
            SetSearchText(e.target.value);
          }}
        />
        <button className="search-btn">Search - {searchText}</button>
      </div>

      <div className="restaurant-list">
        {RestaurantList.map((restaurant) => {
          return <Restruntcard {...restaurant.data} key="{restaurant.data.id}"/>;
        })}

      </div>
    </>
  );
};

export default Body;
