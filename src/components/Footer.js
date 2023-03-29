// import { useContext } from "react";
const useContext = require("react").useContext;
import userContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(userContext);
    return(
      <>
      <h4>This site is developed by {user.name} - {user.email}</h4>
      </>
      
    );
  }

  export default Footer;