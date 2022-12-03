import React from "react";
import Footer from "./Footer";
import { useContext } from "react";
import { context } from "../hooks/Context";
const MenuBar = () => {
  const { menuActive } = useContext(context);
  return (
    <div className={menuActive ? "menu-slide-nav" : "menu-slide-closed"}>
      <h3>Other Games I've Created</h3>

      <a href="#">game 1</a>
      <a href="#">game 2</a>
      <div className="slide-footer">
        <Footer />
      </div>
    </div>
  );
};

export default MenuBar;
