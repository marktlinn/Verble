import React from 'react'
import Rows from './Rows'
const Grid = ({ guesses, currentGuess, turn}) => {

  return (
    <div>
        {guesses.map((elem, i)=> {
            if(turn === i){
                return < Rows key={i}currentGuess={currentGuess}/>
            }
            return < Rows key={i} guess={elem}/>
    })}
    </div>
  )
}

export default Grid