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
      <div className="rows current">
        <div className={currentGuess[0]? 'filled': ''}>{currentGuess[0]}</div>
        <div className={currentGuess[1]? 'filled': ''}>{currentGuess[1]}</div>
        <div className={currentGuess[2]? 'filled': ''}>{currentGuess[2]}</div>
        <div className={currentGuess[3]? 'filled': ''}>{currentGuess[3]}</div>
        <div className={currentGuess[4]? 'filled': ''}>{currentGuess[4]}</div>
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