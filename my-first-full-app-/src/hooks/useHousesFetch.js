import { useState, useEffect } from "react";
// API
import Api from "../Api";

const initialState = { results: [] }

export const useHousesFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchHouses = async () => {
    try {
      setError(false);
      setLoading(true);

      const houses = await Api.getHouses();

      if (houses) {
        setState(prev => ({
          ...houses,
          results:
            [...houses]
        }))
      }

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    setState(initialState);
    fetchHouses();
  }, []);

  return { state, loading, error };
}