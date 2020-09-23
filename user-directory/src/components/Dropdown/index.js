import React from "react";
import "./style.css";
import states from "../../utils/states_titlecase.json";

function Dropdown({filterByState}) {
    return (
        <div className="container">
            <select id="inputState" className="form-control" onChange={filterByState}>
                <option selected>Filter by State</option>
                {states.map(item => (
                    <option value={item.name} key={item.abbreviation}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;