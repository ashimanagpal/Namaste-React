import { IMG_CDN_URL, RestaurantList } from "../constant";



const FoodItem = ({ imageId, name,description, price }) => {
  console.log("------------------" , name, imageId);
  return (
   
    <div className="cart-detail ">
      <img src={IMG_CDN_URL + imageId} className="w-[200px]" />
      <h3 className="font-bold"> {name}</h3>
      <h3 className="font-bold"> {description}</h3>
      <h3 className="font-bold">Rupee: {price/100}</h3>

    </div>
  );
}

export default FoodItem;
