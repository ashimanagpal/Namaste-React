import React from 'react';
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Haeder";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**Header
           *  -Logo
           *  -Navbar
           *  -Cart
       * Body
       *  -Search bar
       *  -List of restrunt 
       *  -restrunt cart
        *      -Images
        *      -Name
        *      -rating
        *      -cousines
       * Footer
       *  -links
       *  -Copyright
       * 
       */

const Applayout = () =>{
  return(
      <>
        <Header />
        <Body />
        <Footer />
      </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing react element in root
root.render(<Applayout/>);






//JSX is not HTML inside javascript , it is HTML like syntax in JS



