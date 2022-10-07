import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
const API_KEY = import.meta.env.VITE_WORD_API_KEY;

//components:

function App() {
  const [word, setWord] = useState(null);
  
  // Set word state for dev environment:
  useEffect(()=>{
    const input = ['Agent'];
    console.log('setting word state');
    setWord(String(input).toUpperCase().split(''))
  },[])

  // Api Fetch for word to be set into state for production
  // useEffect(()=>{
  //   async function getWord() {
  //     try {
  //       console.log('fetching data now')
  //       const url = "https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=5";
  //       const fetcher = await fetch(url, {
  //         method: 'GET',
  //         headers: {
  //           "X-RapidAPI-Key": API_KEY,
  //           "X-RapidAPI-Host": "random-words5.p.rapidapi.com"
  //         }
  //       })
  //       const res = await fetcher.json();
  //       const word = res;
  //       setWord(String(res).toUpperCase().split(''))
  //     } catch (error) {
  //       console.error(`Error with fetching data: ${error.message}`)
  //     }
  //   }
  //   getWord();
  // },[])

  return (
    <div className="App">
        <main>
        {word ? <h1>{word}</h1> : 
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}/> }
      </main>
    </div>
  )
}

export default App
