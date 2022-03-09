import React from "react";

import Navigation from "../components/Navigation";


const HomePage =() => {
        return(
            <div className="bodyHome" style={{
                backgroundImage: 'url("../img/background_avantages_immobilier_neuf.jpg")',
                height: "1000px", backgroundRepeat: "no-repeat", width: "100%", margin: "0px"
              }}>
             
               <Navigation/>

               <h1 style={{
                     textAlign: "center", color: "black", marginTop:"100px"
               }}>ELEGANTS HOMES</h1>
                <h1 style={{
                     textAlign: "center", color: "whitesmoke"
               }}>FOR SALE</h1>


               <h2 style={{
                     textAlign: "left", color: "black", marginTop: "100px", marginLeft:"80px"
               }}>FIND YOUR PERFECT HOME</h2>
               <h2 style={{
                    textAlign: "left", color: "black", marginLeft:"80px"
               }}>WITH US !</h2>
            
            </div>

        );
}

export default HomePage;