import { useEffect, useState } from "react";

const useOnline = () =>{
    const [isOnline, setisOnline] = useState(true);

    useEffect(() =>{

        const handleOnline = () => {
            setisOnline(true);
        }

        const handleOffline = () =>{
            setisOnline(false);
        }

        window.addEventListener("online", handleOnline );

        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online" , handleOnline );
            window.removeEventListener("offline" , handleOffline);
        }

    },[]);

    return isOnline; //here isOline returns boolean value true or false 
}

export default useOnline;