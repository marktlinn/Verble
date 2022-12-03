//hooks
import useFetch from "./hooks/useFetch";
import { useContext } from "react";
import { context } from "./hooks/Context";

//components:
import Loading from "./components/Loading";
import Words from "./components/Words";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MenuBar from "./components/MenuBar";
import StatsBar from "./components/StatsBar";
function App() {
  const { statsActive } = useContext(context);
  // Set word for dev environment:
  const word = "react".toUpperCase().split("");
  // Api Fetch for word to be set into state for production
  // const { response:word, error, isLoading } = useFetch()
  return (
    <div className="App">
      <Nav />
      <main>
        {<MenuBar />}
        {statsActive && <StatsBar />}
        {/* {isLoading? <Loading /> : <h1>{word}</h1>} */}
        <h1>{word ? <Words solution={word} /> : <Loading />}</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
