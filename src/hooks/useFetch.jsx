import { useState, useEffect } from 'react';
const API_KEY = import.meta.env.VITE_WORD_API_KEY;


function useFetch() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function getWord() {
      setIsLoading(true);
      try {
        console.log('fetching data now')
        const url = "https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=5";
        const fetcher = await fetch(url, {
          method: 'GET',
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "random-words5.p.rapidapi.com"
          }
        })
        const res = await fetcher.json();
        const word = res;
        if (!signal.aborted) {
        setResponse(String(res).toUpperCase().split(''));
        }
      } catch (error) {
        if (!signal.aborted) {
        setError(error);
        }
      } finally{
        if (!signal.aborted){
            setIsLoading(false)
        }
      }
    }
    getWord();

    return () => {
        abortController.abort();
      };
  },[])
  
  return { response, error, isLoading };
};

export default useFetch;