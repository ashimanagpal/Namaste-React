// import { useParams } from "react-router-dom";
const useParams = require("react-router-dom").useParams; //useParams will read the URL
import { useState } from "react";
import {  IMG_DISH_URL } from "../constant";
import Shimmer from "./shimmer";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import useRestaurant from "../hooks/useRestaurant";

const restaurantmenu = () => {

  const { restid } = useParams();

  const restaurantmenu = useRestaurant(restid);

  const dispatch = useDispatch(); 

console.log(restaurantmenu, "distruntured data");


  //const handleAddItem = () => {
   // dispatch(addItem("Grapes"));  //{payload: "Grapes"}Here we dispatch an action and pass the payload
  //};

  const addFoodItem = (item) => {
    dispatch(addItem(item)); //item come from cartslice
  };


console.log(restaurantmenu?.card?.info?.name, "name of menuuuuuuuuuuuuuuuu");
  return !restaurantmenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      <div className="res-overview">
        <div className="overview-left">
        <h2 className="res-name">{restaurantmenu?.card?.info?.name}</h2>
        <h1>{restaurantmenu?.card?.info?.cuisines}</h1>
        <h1>{restaurantmenu?.card?.info?.locality}</h1>
        <h1>
          {
            restaurantmenu?.card?.info?.sla
              ?.lastMileTravelString
          }
        </h1>
        </div>
        <div className="overview-right">
        <button className="rating">
          <span className="rating-number">
            <span className="icon-star"></span>
            <span>3.9</span>
          </span>
          <span className="totalRating">10K+ ratings</span>
        </button>
        </div>
       

      </div>
      <div>
        <div>
          {console.log( "items aa gyi",  Object.values??(restaurantmenu?.menu?.items)) }
          <h1>Menus</h1>
          <ul>
            
            {restaurantmenu?.map((item) => ( 
                
              <li key={item.card.info.id}>
                      {/* { <pre>{JSON.stringify(item, null, 2)}</pre> } */}
                    
                    <div className="dish-detail">
                  <div className="dish-left">
                    <p className="font-bold">{item.card.info.name}</p>
                    <div>{item.card.info.price}</div>
                    <div> {item.card.info.description}</div>
                  </div>
                  <div className="dish-right">
                    <div className="dish-img">
                      <button 
                      // onClick = {() => handleAddItem()}
                      onClick = {() =>{addFoodItem(item.card)}}
                       className="text-white" >


    <img alt="" className="" width="256" src={IMG_DISH_URL + item.card.info.imageId}/>
    <div className="bg-green-600 rounded-sm text-white p-1 green-btn" >ADD</div>
    </button>
    
    </div>
    
                    
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default restaurantmenu;
