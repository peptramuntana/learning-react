import { useState } from "react"
import { useEffect } from "react"

const FACT_API = 'https://catfact.ninja/fact'

export function App() {

    const [fact, setFact] = useState('')
    const [imgurl, setImgurl] = useState()
    
    useEffect(() => {
        fetch(FACT_API)
            .then(res => res.json())
            .then(data => {
                setFact(data.fact)
            })
    }, [])

    useEffect(() => {
        if (fact) {
            const firstWord = fact.split(' ')[0]
            fetch(`https://cataas.com/cat/says/${firstWord}`)
                .then(res => setImgurl(res))
        }       
    }, [fact])

    useEffect(() => {
        console.log(imgurl)
    }, [imgurl])

    return (
        <>
            <h1>Cats App</h1>
            <p>{fact}</p>
            <img src={imgurl} alt="Generated Cat IMG with the Attached word of the first Fetch" />
        </>
    )
}