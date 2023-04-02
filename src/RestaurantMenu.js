// import { useParams } from "react-router-dom";
const useParams = require("react-router-dom").useParams; //useParams will readt the URL
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./constant";
import Shimmer from "./components/shimmer"

const restaurantmenu = () => {
  const { restid } = useParams();
  const [restaurantmenu, setRestaurantManu] = useState();

  useEffect(() => {
    getreastuarantMenu();
  }, []);

  async function getreastuarantMenu() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/menu/v4/full?lat=30.3610314&lng=76.8485468&menuId=" + restid
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.6236338&lng=76.8057776&restaurantId="+restid+"&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantManu(json.data);
  }



  return (!restaurantmenu) ? <Shimmer /> : (
    <div className="menu">
      {/* <pre>{JSON.stringify(restaurantmenu, null, 2)}</pre> */}
      <div>
        <h2>{restaurantmenu?.cards[0]?.card?.card?.info?.name}</h2>
        <h1>{restaurantmenu?.cards[0]?.card?.card?.info?.cuisines}</h1>
        <h1>{restaurantmenu?.cards[0]?.card?.card?.info?.locality}</h1>
        <h1>{restaurantmenu?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}</h1>
        <button className="rating">
          <span className="rating-number" >
            <span className="icon-star"></span> 
            <span>3.9</span> 
          </span>
          <span class="totalRating">10K+ ratings</span>  
        </button>



        {/* <img src={IMG_CDN_URL + restaurantmenu?.cards[0]?.card?.card?.info?.cloudinaryImageId} /> */}
        <h1>{restaurantmenu?.costForTwoMsg}</h1>
        <h1>{restaurantmenu?.data?.menu?.item}</h1>
      </div>
      <div>
        <div>
          {/* {console.log(Object.values??(restaurantmenu?.menu?.items))} */}
          <h1>Menusxas</h1>
          <ul>
            {Object.values??(restaurantmenu?.menu?.items).map((item) => (
                <li key = {item.id} >
                  {/* {restaurantmenu?.cards?.card?.card?.info?.name}  */}
                  
                  {restaurantmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card[1]?.card?.itemCards?.card?.name}
                
                {/* <span>{restaurantmenu?.cards[0]?.card?.card?.info?.price}</span> */}
                
                </li>
            ))}
           

        </ul>
          
        </div>
        </div>
    </div>
  );
};

export default restaurantmenu;
