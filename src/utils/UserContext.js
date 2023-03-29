import { createContext } from "react";

const userContext = createContext({
    user: {                     //This is the default value of usercontext
        name: "Dummy Name",
        email: "dunny@gmail.com",
    },
})

userContext.displayName = "userContext"; // this is for debugging, it will show the context name in react dev tool

export default userContext;