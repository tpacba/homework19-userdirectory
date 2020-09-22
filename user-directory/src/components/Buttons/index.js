import React from "react";
import "./style.css";

function Buttons({sortLastName}) {
    return (
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary" onClick={sortLastName.forward}>Last Name: A-Z</button>
            <button type="button" className="btn btn-secondary" onClick={sortLastName.reverse}>Last Name: Z-A</button>
        </div>
    )
}

export default Buttons;