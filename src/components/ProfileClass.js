import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        //constructor will called in the first
        console.log(this.props);
        //below  i create state
        this.state= {
            userInfo: {
                    name: "dummy name",
                    login: "dummy",
            },
        }
        console.log("Child - Constructor" , this.props.name);
    }


    async componentDidMount(){
        //Best place to call API in CBC
        const data = await fetch("https://api.github.com/users/ashimanagpal");
        const json = await data.json();
        console.log(json , "USer API Data");
        this.setState({
            userInfo:json,
        })


        console.log("Child - ComponentDidMount Load" , this.props.name);

        //below this is shared with all the functions of this class Like we user below timer to stop interval
       this.timer = setInterval( () =>{
            console.log("you should clear setInterval while move to next page");
        }, 1000);
    }

    componentDidUpdate(){
        console.log(" componentDidUpdate called")
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount called")
    }


    render(){
        const {count} = this.state;
        const {count2} = this.state;
        console.log("Child - Component Render" , this.props.name);
        return (
            <div>
                <h2>This is profie class Based Componentttttttttttttttt</h2>

                {/* in below line we are recieving props */}
                <h2 > Name: {this.state?.userInfo?.name}</h2>
                <h2>Login: {this.state?.userInfo?.login}</h2>
                <h2>Count: {count}</h2> 
                <h2>count2: {count2}</h2>
                <button className="search-btn" 
                onClick={() => {
                    this.setState({
                        count: 1,
                        count2: 2,
                    });
                    }
                }
                >SetCount</button>
            </div>
            
        )
    }
}

export default ProfileClass; 



/*
*=========RENDER PHASE
* Parent constructor
* Parent render
*  child constructor
*  child render
*
*-Parent componentDidMount
*
*==========COMMIT PHASE
*   
*   -DOM is updated
*   -json is logged in console
*   -child componentDidMount
*
*   
*
*
*
*/

