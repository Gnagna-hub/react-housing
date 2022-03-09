import { useState, useEffect } from "react";
import Api from "../Api";

export const useHouseFetch= houseId => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

   useEffect(() => {
    const fetchHouse = async () => {
        try{
            setError(false);
            setLoading(true);


            const house = await Api.getHouses(houseId);

            setState({
                ...house
            });

            setLoading(false);
        }
        catch (error){
              setError(true);
        }
    }
    fetchHouse()
}, [houseId]);

return { state, loading, error };
}

    