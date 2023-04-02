import { useEffect, useState, useContext} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";





//React.createElement => object => HTML(DOM)
//JSX

// const LoggedInUser = () => {
//   //API call for to check user is vaild or not
//   return true;
// };


const Title = () => (
    <Link href='/' className="font-bold gap-y-6">
      <img className="w-16 mt-2 logo"
        alt="logo"  
        src={Logo}/>
    </Link>
  );

  


//Components => 1) Functional component 2) Class Based components
//eg. of FC
// Component Composition => Passing component to another component
const Header = () =>{
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const {user} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items);

  console.log("inside Header component");
  console.log(cartItems + "Itemsssssssssssssss");

    return (
      
        <div className='flex px-4 justify-between'>
          <Title/>
        <div className='nav-items flex items-center '>
        <ul className="flex gap-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
          <li className="cart">Cart <span class="cart-number"><svg viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg><span class="_2vS77">{cartItems.length}</span></span>  <FontAwesomeIcon icon="check-square" /> <FontAwesomeIcon icon="coffee" /></li>
        </ul>
        
        
      </div>
      <div className="Login">
      <span className=" ">Welcome - <span className="text-name font-bold" >{user.name}</span></span>
        
        {
          
          isLoggedIn ? 
          <button onClick={() => setIsLoggedIn(false)} className="bg-green-600 rounded-lg shadow-md p-1 text-white"> Logout </button> 
          : 
          <button onClick={() => setIsLoggedIn(true)} className="bg-green-600 rounded-lg p-1 shadow-md text-white"> Login </button>
        
        }
          
          
      </div>
      
      </div>
    );
  }

  export default Header;