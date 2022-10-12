import { useEffect } from "react"
import useVerble from "../hooks/useVerble"
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
        <div>{guesses.length>= 1 && guesses.map((elem,i)=> <p key={i}>{elem.map(item=>item.key)}</p>)}</div>
        <p>{currentGuess}</p>
        </div>
  )
}

export default Words