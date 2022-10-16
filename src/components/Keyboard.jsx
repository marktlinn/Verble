import { useState, useEffect } from 'react';

const Keyboard = ( { keysUsed, letterChoice} ) => {
    const [letters, setLetters] = useState(['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','ENTER','Z','X','C','V','B','N','M', '«'])

    const clicker = (e) => {
      const key = {key: e.target.id}
      letterChoice(key)
    }

  return (
    <div className='keyboard'>
      <div className='keyrow row1'>
        {letters && letters.slice(0,10).map(letter=> {
            const colour = keysUsed[letter]
            return (
          < button onClick={clicker} id={letter} className={colour} key={letter}>{letter}</button>
            )
          })}
      </div>
      <div className='keyrow row2'>
        {letters && letters.slice(10,19).map(letter=> {
          const colour = keysUsed[letter]
          return (
        < button onClick={clicker} id={letter} className={colour} key={letter}>{letter}</button>
          )
        })}
      </div>
      <div className='keyrow row3'>
          {letters && letters.slice(19).map(letter=> {
            const colour = keysUsed[letter]
            return (
          < button onClick={clicker} id={letter} className={colour} key={letter}>{letter}</button>
            )
          })}
      </div>
    </div>
  )
}

export default Keyboard