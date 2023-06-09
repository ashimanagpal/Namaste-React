// import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./Profileclass";
import { Component } from "react";



// const About = () => {
//     return(
//         <div>
//             <h1>This is an About Us page</h1>
//             <Profile name={"Ashima"}/>
//             {/* in below line we are passing props to profile class */}
//             <ProfileClass name={"Ashima CBC"} xyz={"abc"} />
//            {/* <Outlet/> */}
//         </div>
//     )
// }


class AboutCBC extends Component{

    constructor(props){
        super(props);
        console.log("Parent - Constructor Called");
    }

    componentDidMount(){

        console.log("Parent - componentDidMount called");
    }

    render(){
        console.log("Parent - render function");
        return(
            <div>
                <h1>This is an About Us page</h1>
                <Profile name={"Ashima"}/>
                {/* in below line we are passing props to profile class */}
                {/* <ProfileClass name={"First child"} xyz={"abc"} /> */}
               {/* <Outlet/> */}
            </div>
        )
    }
}



export default AboutCBC;