import { useEffect, useState } from "react";

//hooks
import useVerble from "../hooks/useVerble";

//components
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Finale from "./Finale";

const Words = ({ solution }) => {
  const { currentGuess, letterChoice, turn, isCorrect, guesses, keysUsed } =
    useVerble(solution);
  const [gameOver, setGameOver] = useState(false);

  //Set streak status when game completed with correct answer
  const setStorage = item => {
    let currentScore = JSON.parse(localStorage.getItem(item));
    console.log("inStrorage =", currentScore);
    if (currentScore === null) {
      currentScore = 1;
    } else {
      currentScore += 1;
    }
    console.log("changes storage: ", currentScore);
    localStorage.setItem(item, JSON.stringify(currentScore));
  };

  // Set streak status to zero when game failed
  const removeLocalStorageItem = item => {
    let currentScore = JSON.parse(localStorage.getItem(item));
    console.log("update Storage =", currentScore);
    if (currentScore !== null) {
      console.log("changes storage: ", currentScore);
      localStorage.removeItem(item);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", letterChoice);
    if (isCorrect) {
      window.removeEventListener("keyup", letterChoice);
      setTimeout(() => {
        setGameOver(true);
      }, 2000);
    }
    if (turn > 5) {
      window.removeEventListener("keyup", letterChoice);
      setTimeout(() => {
        removeLocalStorageItem("currentStreak");
        setGameOver(true);
      }, 2000);
    }
    return () => window.removeEventListener("keyup", letterChoice);
  }, [letterChoice, isCorrect, turn]);

  useEffect(() => {
    if (gameOver) {
      document.body.style.overflow = "hidden";
      setStorage("played");
      setStorage("currentStreak");
    } else if (!gameOver) {
      document.body.style.overflow = "unset";
    }
  }, [gameOver]);

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard letterChoice={letterChoice} keysUsed={keysUsed} />
      {gameOver && (
        <Finale turn={turn} isCorrect={isCorrect} solution={solution} />
      )}
    </div>
  );
};

export default Words;
