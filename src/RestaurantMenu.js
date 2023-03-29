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
      <pre>{JSON.stringify(restaurantmenu, null, 2)}</pre>
      <div>
        <h1>Restaurant id: {restaurantmenu?.cards[0]?.card?.card?.info?.id}</h1>
        <h2>{restaurantmenu?.cards[0]?.card?.card?.info?.name}</h2>
        <h1>{restaurantmenu?.restaurantSlug?.restaurant}</h1>
        <h1>{restaurantmenu?.cards[0]?.card?.card?.info?.avgRating}Stars</h1>
        <img src={IMG_CDN_URL + restaurantmenu?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
        <h1>{restaurantmenu?.costForTwoMsg}</h1>
        <h1>{restaurantmenu?.data?.menu?.item}</h1>
      </div>
      <div>
        <div>
          {console.log(Object.values??(restaurantmenu?.menu?.items))}
          <h1>Menu</h1>
          <ul>
            {Object.values??(restaurantmenu?.menu?.items).map((item) => (
                <li key = {item.id} >{item.name} <span>{item.price}</span></li>
            ))}
           

        </ul>
          
        </div>
        </div>
    </div>
  );
};

export default restaurantmenu;
