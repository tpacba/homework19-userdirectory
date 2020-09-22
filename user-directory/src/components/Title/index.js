import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">
      <img alt="logo" src="https://cdn.iconscout.com/icon/free/png-256/employee-1714118-1459147.png"></img>
      <h1 className="title">{props.children}</h1>
    </div>
  )
}

export default Title;
