import { IMG_CDN_URL, RestaurantList } from "../constant";
import { useContext } from "react";
import userContext from "../utils/UserContext";

const Restruntcard = ({ cloudinaryImageId, name, cuisines, lastMileTravel,userrc, avgRating }) => {
  const {user} = useContext(userContext);
  return (
    <div className="cart-detail">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="w-[200px]" />
      <h3 className="font-bold">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      {/* <h4>{lastMileTravel} min</h4> */}
      <div className="rating-star"><span className="istar"></span><span>{avgRating}</span></div>
     
      {/* <h1 className="font-bold">{user.name} - {user.email}</h1> */}
    </div>
  );
}

export default Restruntcard;
