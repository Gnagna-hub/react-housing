import React from "react";
import { useHousesFetch } from "../hooks/useHousesFetch";

const Houses = ()=> {
    const {state, loading, error} = useHousesFetch();

    return(
      

            <div className="houses">
                 { state.results.map(house => (

                  <div className="plan"  key={house.id}>
                         <img src={house.img} alt="myflag" ></img>
                         <p>{house.address}, Number of Pieces: {house.numberOfPieces}, Price: {house.price}</p>
                       

                  </div>

                 ))}

            </div>

        )
    
  
}
export default Houses;