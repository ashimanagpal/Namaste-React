import { useState } from "react"
import React, { Component } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/fontawesome-free-solid'

const Section = ({title , description,isvisible, setIsvisible}) => {
    return (
        <div className="border border-black m-2 p-2">
            <h3 className="font-bold text-xl">{title}  </h3>

            {isvisible ? 
                <><button onClick={() => 
                setIsvisible(false)} className="underline cursor-pointer flex items-center">Hide <FaAngleUp/></button>

                <p>{description}</p></>

            : <button onClick={() => 
                setIsvisible(true)} className="underline cursor-pointer flex items-center">Show <FaAngleDown/></button> }
            
         
        </div>
    )
}


const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("team");
    return (
        <>
            <div className="text-3xl font-bold m-2 p-2">Instamart</div>
                <Section title={"About Instamart"} description={
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC.  s from the 1914 translation by H. Rackham"}
                    isvisible={visibleSection == "about"} 
                    setIsvisible = {() => setVisibleSection("about")}
                    /> 


                <Section title={"Team Of Instamart"} description={
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC.  s from the 1914 translation by H. Rackham"}
               
                    isvisible={visibleSection == "team"}
                    
                    setIsvisible = { () => setVisibleSection("team")}
                />


                <Section title={"Career Instamart"} description={
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC.  s from the 1914 translation by H. Rackham"}
                
                    isvisible={visibleSection == "career"}
                
                    setIsvisible={() => setVisibleSection("career")}
                />
        </>
    )
}

export default Instamart;