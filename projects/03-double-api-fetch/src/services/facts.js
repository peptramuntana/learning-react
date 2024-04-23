const ENPOINT_RANDOM_CAT_FACT = 'https://catfact.ninja/fact'

export const getRandomCatFact = () => {
    return fetch(ENPOINT_RANDOM_CAT_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}
