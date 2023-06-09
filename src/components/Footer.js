// import { useContext } from "react";
const useContext = require("react").useContext;
import userContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(userContext);
    return(
      <>
      <div className="footer">This site is developed by {user.name} - {user.email}</div>
      </>
      
    );
  }

  export default Footer;