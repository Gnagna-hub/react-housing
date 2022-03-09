import React from "react";
import {LoremIpsum} from "react-lorem-ipsum";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div className="about">
          
            <Navigation/>
            <h1> About</h1>
            <br/>
            < LoremIpsum  p = { 2 } / > 
            <br/>
            < LoremIpsum  p = { 2 } / > 

           
           

        </div>
    )
};
export default About;
