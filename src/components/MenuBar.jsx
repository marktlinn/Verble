import React from "react";
import Footer from "./Footer";
import { useContext } from "react";
import { context } from "../hooks/Context";
import {
  faQuestion,
  faGamepad,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuBar = () => {
  const { menuActive } = useContext(context);
  return (
    <div
      className={
        menuActive ? "menu-slide-nav slide-bar" : "menu-slide-closed slide-bar"
      }
    >
      <div className="menuTitle">
        <FontAwesomeIcon
          className="menuIcon"
          icon={faGamepad}
          size="2x"
        ></FontAwesomeIcon>
        <h3>Other Games I've Created</h3>
      </div>

      <div className="menuItemBlock">
        <div className="menuItem">
          <FontAwesomeIcon
            className="menuIcon"
            icon={faQuestion}
          ></FontAwesomeIcon>
          <a href="https://qwizzical.netlify.app">Qwizzical</a>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon
            className="menuIcon"
            icon={faClock}
          ></FontAwesomeIcon>
          <a href="https://tenzies-fe-app.netlify.app/">Tenzies</a>
        </div>
      </div>

      <div className="slide-footer">
        <Footer />
      </div>
    </div>
  );
};

export default MenuBar;
