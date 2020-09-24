import React from "react";

function Buttons({ sortLastName }) {
    return (
        <div className="container">
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary" disabled>Sort by Last Name</button>
                <button type="button" className="btn btn-secondary" onClick={sortLastName.forward}>A-Z</button>
                <button type="button" className="btn btn-secondary" onClick={sortLastName.reverse}>Z-A</button>
            </div>
        </div>
    )
}

export default Buttons;