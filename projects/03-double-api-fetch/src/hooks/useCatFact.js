import { useEffect, useState } from "react";
import { getRandomCatFact } from "../services/facts";

export function useCatFact () {
    const [fact, setFact] = useState()
  
    const refreshFact = () => {
        getRandomCatFact().then(newFact => setFact(newFact))
    }
  
    // Fetch for the first load
    useEffect(refreshFact, [])
  
    return { fact, refreshFact }
  }