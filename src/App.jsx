import { useEffect, useState } from 'react';

//hooks
import useFetch from './hooks/useFetch';

//components:
import Loading from './components/Loading';
import Words from './components/Words';
import Keyboard from './components/Keyboard';

function App() {
  // Set word for dev environment:
  const word = 'words'.toUpperCase().split('')

  // Api Fetch for word to be set into state for production
  // const { response:word, error, isLoading } = useFetch()

  return (
    <div className="App">
      <main>
        {/* {isLoading? <Loading /> : <h1>{word}</h1>} */}
        <h1>{word? < Words solution={word} /> : <Loading/>}</h1>
      </main>
      < Keyboard />
    </div>
  )
}

export default App
