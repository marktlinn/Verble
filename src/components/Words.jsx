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
    if (currentScore === 0) {
      currentScore = 1;
    } else {
      currentScore += 1;
    }
    localStorage.setItem(item, JSON.stringify(currentScore));
  };

  const updateMaxStreak = (current, max) => {
    let currentMaxStreak = JSON.parse(localStorage.getItem(max));
    let currentStreak = JSON.parse(localStorage.getItem(current));
    if (currentStreak > currentMaxStreak) {
      localStorage.setItem(max, JSON.stringify(currentStreak));
    } else return;
  };

  // Set streak status to zero when game failed
  const removeLocalStorageItem = item => {
    let currentScore = JSON.parse(localStorage.getItem(item));
    if (currentScore !== null) {
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
        setGameOver(true);
      }, 2000);
    }
    return () => window.removeEventListener("keyup", letterChoice);
  }, [letterChoice, turn]);

  useEffect(() => {
    if (gameOver) {
      if (isCorrect === true) {
        document.body.style.overflow = "hidden";
        setStorage("played");
        setStorage("currentStreak");
        updateMaxStreak("currentStreak", "maxStreak");
      } else {
        removeLocalStorageItem("currentStreak");
      }
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
