import React from "react";

function Title(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://cdn.iconscout.com/icon/free/png-256/employee-1714118-1459147.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
          {props.children}
        </a>
      </nav>
    </div>

  )
}

export default Title;



      // <div className="container">
      //   <img alt="logo" src="https://cdn.iconscout.com/icon/free/png-256/employee-1714118-1459147.png"></img>
      //   <h1 className="title">{props.children}</h1>
      // </div>