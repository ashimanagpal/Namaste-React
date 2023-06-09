// import { useRouteError } from "react-router-dom";
const useRouteError = require("react-router-dom").useRouteError;

const Error = () => {
    
const err = useRouteError();
console.log(err);

    return(
        <div className="flex items-center justify-center h-screen flex-col wrong-url">
            <h1>! Oops...</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status + " " + err.statusText}</h3>
        </div>
        
    )
};

export default Error;