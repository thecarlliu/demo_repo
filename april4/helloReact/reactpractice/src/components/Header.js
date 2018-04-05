import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const style = {
    h1: {
        font: "100px",
        background: "red"
    }
}

const Header = () => (
  <header className="header">
    <h1 style={style.h1}>Welcome</h1>
  </header>
);

export default Header;
