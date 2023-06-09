import { useEffect, useState } from "react";
import { RES_MENU } from "../constant";


const useRestaurant = (restid) =>{
    //const [restaurantmenu, setRestaurantmenu ] = useState(null);
    const [items, setItems] = useState(null);

    //Get data from API
    useEffect(() => {
        getreastuarantMenu();
      }, []);
    
      async function getreastuarantMenu() {
        const data = await fetch( RES_MENU + restid + "&submitAction=ENTER");
        const json =  await data.json();
        
        console.log(json , "fetched dataaaaaaaaaaaaaaaaaaaaa");
        // setRestaurantmenu(json.data);
         setItems(
          json.data?.cards[2]["groupedCard"]["cardGroupMap"]["REGULAR"]["cards"][2]["card"]["card"]["itemCards"]
        );
        
      }
      console.log(items, "items in custom hook");

      //return restaurant data
      return items;
      
      
}

export default useRestaurant;