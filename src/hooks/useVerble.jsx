import { useState } from "react"

const useVerble = (solution) => {
    const [turn ,setTurn] = useState(0);
    const [isCorrect ,setIsCorrect] = useState(false);
    const [currentGuess ,setCurrentGuess] = useState('');
    const [guesses ,setGuesses] = useState([]);
    const [history ,setHistory] = useState([]);

    //adds letter to the currentGuess state
    function letterChoice({key}){
        const alphaRegex = /^[a-z]$/gi;
        if(alphaRegex.test(key) && currentGuess.length<5){
            setCurrentGuess(prev=> prev+key.toUpperCase())
        }
        if(key === 'Backspace'){
            setCurrentGuess(prev=> prev.slice(0,-1))
        }
        console.log(currentGuess)
    }

    //adds a new guess to the guesses state
    function addGuess(){

    }

    //formats each guess into a collection of letter key value pairs to determine output color etc.
    function formatGuess(){
    }

    return { turn, isCorrect, currentGuess, guesses, letterChoice}

}

export default useVerble