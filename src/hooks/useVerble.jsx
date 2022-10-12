import { useState } from "react"

const useVerble = (solution) => {
    const [turn ,setTurn] = useState(0);
    const [isCorrect ,setIsCorrect] = useState(false);
    const [currentGuess ,setCurrentGuess] = useState('');
    const [guesses ,setGuesses] = useState([...Array(6)]);
    const [history ,setHistory] = useState([]);

    //adds letter to the currentGuess state
    function letterChoice({key}){
        const alphaRegex = /^[a-z]$/gi;
        if(alphaRegex.test(key) && currentGuess.length<5){
            setCurrentGuess(prev=> prev+key.toUpperCase());
        }
        if(key === 'Backspace'){
            setCurrentGuess(prev=> prev.slice(0,-1));
        }

        if(key === 'Enter'){
            if(turn >= 6) {
                console.log('All guesses used');
                return;
            }
            if(history.includes(currentGuess)){
                console.log('That guess has already been used');
                return;
            }
            if(currentGuess.length<5){
                console.log('Guess must be a 5 letter word');
                return;
            }
            formatGuess()
        }
    }

    //formats each guess into a collection of letter key value pairs to determine output color etc.
    function formatGuess(){
        setHistory(prev=> [...prev, currentGuess])

        let formatGuess = [...currentGuess].map(elem=> ({
            key: elem,
            colour: 'grey'
        }))

        formatGuess.forEach((elem,index)=> {
            if(solution[index] === elem.key){
                formatGuess[index].colour = 'green';
                console.log("it's here, hurrah", elem.key);
            }
            else if(solution.includes(elem.key) && elem[index] !== 'green'){
                formatGuess[index].colour = 'yellow'
                console.log("close but no cigar", elem.key);
            }
        })
        addGuess(formatGuess);
        return formatGuess;
    }

    //adds a new guess to the guesses state
    function addGuess(guess){
        console.log('solution ',solution, 'vs guess' , currentGuess)
        if(currentGuess === solution.join('')){
            setIsCorrect(true)
        }
        else {
            setGuesses(prev=> {
                let guessArrays= [...prev];
                guessArrays[turn]= guess;
                return guessArrays;
            })
            setTurn(prev=> prev+1);
            setCurrentGuess('');
        }
    }

    return { turn, isCorrect, currentGuess, guesses, letterChoice}

}

export default useVerble