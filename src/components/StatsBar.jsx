import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../hooks/useLocalStorage";
const StatsBar = ({ setStatsActive }) => {
  const { played, currentStreak, maxStreak } = useLocalStorage();

  const handleExit = () => {
    setStatsActive(false);
  };

  return (
    <div className="stats-slide-nav">
      <section className="stats-card">
        <FontAwesomeIcon
          icon={faX}
          onClick={handleExit}
          className="stats-exit"
          size="2x"
        ></FontAwesomeIcon>
        <h3>Statistics</h3>

        <ul className="stats-list">
          <li>
            <div className="stat-item-pair">
              <span>{played}</span>
              <span>Played</span>
            </div>
          </li>
          <li>
            <div className="stat-item-pair">
              <span>{currentStreak}</span>
              <span>Current Streak</span>
            </div>
          </li>
          <li>
            <div className="stat-item-pair">
              <span>{maxStreak}</span>
              <span>Max Streak</span>
            </div>
          </li>
        </ul>

        <hr className="stats-hr" />

        <div className="stats-clear">
          <h3>Want to clear your data and start again?</h3>
          <button>Clear</button>
        </div>
      </section>
    </div>
  );
};

export default StatsBar;
