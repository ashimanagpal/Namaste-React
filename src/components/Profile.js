import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

   useEffect( () => {
    //Best place to call API in Functional component
    console.log("useEffect Calls");

    const timerFC = setInterval(() => {
        console.log("Timer with functional compo wuth useEffect fun")
    },1000);

    return() => {
        clearInterval(timerFC);
        console.log("useEffect return function");
    }
   },[]);

    return (
        <div className="mb-4">
            <h2>This Profile is functional Component</h2>
        <h2> Name: {props.name}</h2>
        <h2>Count: {count}</h2>
        <h2>count2: {count2}</h2>
        <button className="search-btn" 
        onClick={() => {
            setCount(1);
            setCount2(2);
        }}
        >SetCount</button>
        </div>
        
    )
}

export default Profile;