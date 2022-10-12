import { useEffect } from "react"
import useVerble from "../hooks/useVerble"
import Grid from "./Grid"
const Words = ({ solution }) => {
  const { currentGuess, letterChoice, turn, isCorrect, guesses } = useVerble(solution)

  useEffect(()=> {
    window.addEventListener('keyup', letterChoice)
    return () => window.removeEventListener('keyup', letterChoice)
  }, [letterChoice])
  
  useEffect(()=> {
    console.log('guesses', guesses,'turn', turn, 'isCorrect',isCorrect)
  }, [guesses, turn, isCorrect])
    return (
      <div>
        <p>{currentGuess}</p>
        < Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>

        </div>
  )
}

export default Words