import React from 'react'
import ReactDOM, { createRoot } from "react-dom/client";

const heading = React.createElement( //createElement is API
  "h1" ,
  { 
    id : "title", //try to write style here
} , 
"Namaste React"
); //build H1 tag


const heading2 = React.createElement(
  "h2" , 
  {
    style : {color: "white", backgroundColor: "red" }
  } , 
  "Namaste React"); 


  const container = React.createElement(
    "div" , //tag
{
    id : "container", //  attributes or props in react , Prop can be anything not only class and id
    class : "nav-head", 
    Hellow: "World" , 
} , 
[heading, heading2] // childrens
); //build H1 tag


const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing react element in root
root.render(container);




