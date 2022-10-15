import { useState } from "react"

const useVerble = (solution) => {
    const [turn ,setTurn] = useState(0);
    const [isCorrect ,setIsCorrect] = useState(false);
    const [currentGuess ,setCurrentGuess] = useState('');
    const [guesses ,setGuesses] = useState([...Array(6)]);
    const [history ,setHistory] = useState([]);
    const [keysUsed, setKeysUsed] = useState({});

    //adds letter to the currentGuess state
    function letterChoice({key}){
        if(isCorrect === true) return;
        const alphaRegex = /^[a-z]$/gi;
        if(alphaRegex.test(key) && currentGuess.length<5){
            setCurrentGuess(prev=> prev+key.toUpperCase());
        }
        if(key === 'Backspace'){
            setCurrentGuess(prev=> prev.slice(0,-1));
        }

        if(key === 'Enter'){
            if(turn >5) {
                return;
            }
            if(history.includes(currentGuess)){
                return;
            }
            if(currentGuess.length<5){
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
            }
            else if(solution.includes(elem.key) && elem[index] !== 'green'){
                formatGuess[index].colour = 'yellow'
            }
        })
        addGuess(formatGuess);
        return formatGuess;
    }

    //adds a new guess to the guesses state
    function addGuess(guess){
        if(currentGuess === solution.join('')){
            setIsCorrect(true)
        }
        setGuesses(prev=> {
            let guessArrays= [...prev];
            guessArrays[turn]= guess;
            return guessArrays;
        })
        setTurn(prev=> prev+1);

        setKeysUsed(prev=> {
            let keys = {...prev};
            guess.forEach(letter=> {
                const currColour = keys[letter.key];
                if(letter.colour === 'green'){
                    keys[letter.key] = 'green'
                    return;
                }
                if(letter.colour === 'yellow' && currColour !== 'green'){
                    keys[letter.key] = 'yellow'
                    return;
                }
                if(letter.colour === 'grey' && currColour !== 'green' && currColour !== 'yellow'){
                    keys[letter.key] = 'grey';
                    return;
                }
            });
            return keys;
        });
        setCurrentGuess('');
    }

    return { turn, isCorrect, currentGuess, guesses, letterChoice, keysUsed }

}

export default useVerble