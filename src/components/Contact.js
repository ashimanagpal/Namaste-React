import { useContext } from "react";
import userContext from "../utils/UserContext";

const Contact = () => {
    const {user} = useContext(userContext);
    return(
        <>
        <h1>This is contact page</h1>
        <h2>{user.name} - {user.email}</h2>
        
        </>
        
    )
}

export default Contact;