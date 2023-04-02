import React, { useState } from "react";
import React, { Component } from 'react';
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Haeder";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./RestaurantMenu";
import Instamart from "./components/Instamart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import store from "./utils/Store";
import { Provider } from "react-redux";
import './App.css';




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
        path: "/About",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
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
