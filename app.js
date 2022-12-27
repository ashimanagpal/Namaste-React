const heading = React.createElement("h1" ,{ id : "title", //try to write style here
} , 
"Namaste React"); //build H1 tag


 const heading2 = React.createElement("h2" , {id : "title",} , "Namaste React"); 

  const container = React.createElement("div" , 
{
    id : "container", //try to write style here
} , 
[heading, heading2]
); //build H1 tag


const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing react element in root
root.render(container);