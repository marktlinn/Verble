import React from "react";
import Footer from "./Footer";
import { useContext } from "react";
import { context } from "../hooks/Context";
const MenuBar = () => {
  const { menuActive } = useContext(context);
  return (
    <div
      className={
        menuActive ? "menu-slide-nav slide-bar" : "menu-slide-closed slide-bar"
      }
    >
      <h3>Other Games I've Created</h3>

      <a href="https://qwizzical.netlify.app">Qwizzical</a>
      <a href="https://tenzies-fe-app.netlify.app/">Tenzies</a>
      <div className="slide-footer">
        <Footer />
      </div>
    </div>
  );
};

export default MenuBar;
