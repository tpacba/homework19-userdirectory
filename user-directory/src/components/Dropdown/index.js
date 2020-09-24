import React from "react";
import states from "../../utils/states_titlecase.json";

// Maps through array of US states from states_titlecase.json to create dropdown
function Dropdown({filterByState}) {
    return (
        <div className="container">
            <select id="inputState" className="form-control" onChange={filterByState}>
                <option value="choose">Filter by State</option>
                {states.map(item => (
                    <option value={item.name} key={item.abbreviation}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;