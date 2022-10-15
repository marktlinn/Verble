import { useEffect } from "react"

//hooks
import useVerble from "../hooks/useVerble"

//components
import Grid from "./Grid"
import Keyboard from './Keyboard';

const Words = ({ solution }) => {
  const { currentGuess, letterChoice, turn, isCorrect, guesses, keysUsed } = useVerble(solution)

  useEffect(()=> {
    window.addEventListener('keyup', letterChoice)
    if(isCorrect){
      window.removeEventListener('keyup', letterChoice);
      console.log('You got it!')
    }
    return () => window.removeEventListener('keyup', letterChoice);
  }, [letterChoice, isCorrect])

    return (
      <div>
        < Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        < Keyboard  keysUsed={keysUsed} />
      </div>
  )
}

export default Words