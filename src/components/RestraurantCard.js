import { IMG_CDN_URL, RestaurantList } from "../constant";
import { useContext } from "react";
import userContext from "../utils/UserContext";

function Restruntcard({ cloudinaryImageId, name, cuisines, lastMileTravel,userrc }) {
  const {user} = useContext(userContext);
  return (
    <div className="shadow-lg p-2 bg-green-100 w-[200px]">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="w-[200px]" />
      <a className="font-bold" href="#">{name}</a>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravel} min</h4>
      {/* <h3>{userrc.name}</h3>
      <h2>{userrc.email}</h2> */}
      <h1 className="font-bold">{user.name} - {user.email}</h1>
    </div>
  );
}

export default Restruntcard;
