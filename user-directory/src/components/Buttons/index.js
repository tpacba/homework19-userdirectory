import React from "react";
import "./style.css";

function Buttons({ sortLastName }) {
    return (
        <div className="container">
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary" onClick={sortLastName.forward}>Last Name: A-Z</button>
                <button type="button" className="btn btn-secondary" onClick={sortLastName.reverse}>Last Name: Z-A</button>
            </div>
        </div>
    )
}

export default Buttons;