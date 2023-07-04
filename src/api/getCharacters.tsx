
import { randomize } from "../utilities/randomize.utility"
import { Character } from '../models/character';
import { useEffect, useState } from "react";


const getFiveRandomCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>([])

    const baseURL = 'https://rickandmortyapi.com/api/character/'
    
    const numberOfCharacters: string = randomize(5)

    const newFiveCharacters = () => {
        fetch(baseURL + numberOfCharacters)
            .then(res => res.json())
            .then(data => setCharacters(data))
    }

    useEffect(() => {
        newFiveCharacters()
    }, [])
    

    return {
        characters,
        newFiveCharacters
    }
}

export default getFiveRandomCharacters