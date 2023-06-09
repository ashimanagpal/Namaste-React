import  { Suspense, lazy, useState } from "react";
import  { Component } from 'react';
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Haeder";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import store from "./utils/Store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import './App.css';
import Shimmer from "./components/shimmer";
// import Instamart from "./components/Instamart";



//Always write lazyload at top or below importing files
const Instamart = lazy(() => import("./components/Instamart")); //here i write import fun this import is not same as upper import





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


//Chunking
//On-Demand Loading
//Dynamic Import
//Code Splitting
//Bundle
//LAzy Loading
//Optimizing


const Applayout = () => {
  const [user, setUser] = useState({
    name: "Ashima Nagpal",
    email: "ashima.nagpal98@gmail.com",
  }); //here user is state 

  
  return (
    // Here below we passing the store which is key, to our application this means we passing the prop
    <Provider store={store}> 
    <UserContext.Provider 
    value={{              //Here we override the value userContext 
      user: user,
      setUser: setUser,
    }}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{  //here user is prop
              name: "Ashima",
              email: "ashima.nagpal98@gmail.com",
            }}

          />
        ),
      },
      {
        path: "/About",   //Here / slash means from root like: 'localhost:1234'
        element: <About />,

        children:[
          {
          path: "profile", //parentPath/{path} => localhost:1234/about/profile
          element: <ProfileClass/>
        },
      ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}>
                    <Instamart />
                  </Suspense>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurantmenu/:restid",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing react element in root
root.render(<RouterProvider router={appRouter} />);

//JSX is not HTML inside javascript , it is HTML like syntax in JS
