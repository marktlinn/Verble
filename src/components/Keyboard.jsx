import { useState, useEffect } from 'react';
const Keyboard = () => {
    const [letters, setLetters] = useState({
        q:'q', w:'w', e:'e', r:'r', t:'t', y:'y', u:'u', i:'i', o:'o', p:'p', a:'a', s:'s', d:'d', f:'f', g:'g', h:'h', j:'j', k:'k', l:'l', z:'z', x:'x', c:'c', v:'v', b:'b', n:'n', m:'m', Enter: "ENTER", Del: "«"
    })
    console.log(Object.values(letters))

  return (
    <div className='keyboard'>
        {letters && Object.values(letters).map((key,index)=> (
        < button key={key} >{key}</button>)) }
    </div>
  )
}

export default Keyboard