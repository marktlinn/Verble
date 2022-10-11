import { useEffect } from "react"
import useVerble from "../hooks/useVerble"
const Words = ({ solution }) => {
  const { currentGuess, letterChoice } = useVerble(solution)

  useEffect(()=> {
    window.addEventListener('keyup', letterChoice)
    return () => window.removeEventListener('keyup', letterChoice)
  }, [letterChoice])
  
    return (
        <div>{currentGuess}</div>
  )
}

export default Words