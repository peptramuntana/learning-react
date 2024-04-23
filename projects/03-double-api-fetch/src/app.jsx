import { useState, useEffect } from 'react'
import { useCatFact} from './hooks/useCatFact'

export function App() {

    const { fact, refreshFact } = useCatFact()
    const [imgurl, setImgurl] = useState()
    
    useEffect(() => {
        if (fact) {
            const firstWord = fact.split(' ')[0]
            fetch(`https://cataas.com/cat/says/${firstWord}`)
                .then(res => setImgurl(res.url))
        }
    }, [fact])


    const handleClick = () => {
        refreshFact()
    }

    return (
        <>
            <h1>Cats App</h1>
            <button onClick={handleClick}>REFRESH</button>
            <p>{fact}</p>
            <img src={`${imgurl}`} alt="Generated Cat IMG with the Attached word of the first Fetch" />
        </>
    )
}