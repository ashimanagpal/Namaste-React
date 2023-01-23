import { IMG_CDN_URL, RestaurantList } from "../constant";
import Body from "../components/Body";

const Restruntcard = ({cloudinaryImageId,name,cuisines,lastMileTravel}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravel} min</h4>
    </div>
  );
};

export default Restruntcard;
