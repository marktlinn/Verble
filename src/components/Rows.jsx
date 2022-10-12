import React from 'react'

const Rows = ({ guess, currentGuess }) => {

  if(guess){
    return (
      <div className="rows old">
        {guess.map((letter, i)=> <div key={i} className={letter.colour}>{letter.key}</div>)}
      </div>
    )
  }

  if(currentGuess){
    return (
      <div className="rows old">
        <div>{currentGuess[0]}</div>
        <div>{currentGuess[1]}</div>
        <div>{currentGuess[2]}</div>
        <div>{currentGuess[3]}</div>
        <div>{currentGuess[4]}</div>
      </div>
    )
  }

  return (
    <div className='rows'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Rows