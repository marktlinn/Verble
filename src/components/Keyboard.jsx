import { useState, useEffect } from 'react';
const Keyboard = ( {keysUsed} ) => {
    const [letters, setLetters] = useState({
        Q:'Q', W:'W', E:'E', R:'R', T:'T', Y:'Y', U:'U', I:'I', O:'O', P:'P', A:'A', S:'S', D:'D', F:'F', G:'G', H:'H', J:'J', K:'K', L:'L', Z:'Z', X:'X', C:'C', V:'V', B:'B', N:'N', M:'M', Enter: "ENTER", Del: "«"
    })
  return (
    <div className='keyboard'>
        {letters && Object.values(letters).map((letter,index)=> {
          const colour = keysUsed[letter]
          return (
        < button className={colour} key={letter}>{letter}</button>
          )
        })
      }
    </div>
  )
}

export default Keyboard