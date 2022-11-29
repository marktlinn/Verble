import { useState } from 'react';

//hooks
import useFetch from './hooks/useFetch';

//components:
import Loading from './components/Loading';
import Words from './components/Words';
import Footer from './components/Footer';
import Nav from './components/Nav';
import MenuBar from './components/MenuBar';
import StatsBar from './components/StatsBar';
function App() {
  // Set word for dev environment:
  const word = 'react'.toUpperCase().split('')
  const [menuActive, setMenuActive] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  // Api Fetch for word to be set into state for production
  // const { response:word, error, isLoading } = useFetch()
  console.log('menuActive?', menuActive, 'statsActive?', statsActive)
  return (
    <div className="App">
      <Nav 
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        statsActive={statsActive}
        setStatsActive={setStatsActive}
      />
      <main>
      {menuActive && <MenuBar />}
      {statsActive && <StatsBar
      setStatsActive={setStatsActive}
       />}
        {/* {isLoading? <Loading /> : <h1>{word}</h1>} */}
        <h1>{word? < Words solution={word} /> : <Loading/>}</h1>
      </main>
      <Footer/>
    </div>
  )
}

export default App
