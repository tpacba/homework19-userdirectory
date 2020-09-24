import React from "react";

function Title(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://cdn.iconscout.com/icon/free/png-256/employee-1714118-1459147.png" width="30" height="30" className="d-inline-block align-top" alt="logo" loading="lazy" id="logo" />
          {props.children}
        </a>
      </nav>
    </div>

  )
}

export default Title;