import { useState } from "react";

const useLocalStorage = () => {
  const [played, setPlayed] = useState(() => {
    if (JSON.parse(localStorage.getItem("played"))) {
      return JSON.parse(localStorage.getItem("played"));
    } else {
      return 0;
    }
  });
  const [currentStreak, setCurrentStreak] = useState(() => {
    if (JSON.parse(localStorage.getItem("currentStreak"))) {
      return JSON.parse(localStorage.getItem("currentStreak"));
    } else {
      return 0;
    }
  });
  const [maxStreak, setMaxStreak] = useState(() => {
    if (JSON.parse(localStorage.getItem("maxStreak"))) {
      return JSON.parse(localStorage.getItem("currentStreak"));
    } else {
      return 0;
    }
  });
  return { played, currentStreak, maxStreak };
};

export default useLocalStorage;
