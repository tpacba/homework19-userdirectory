import React from "react";

function Search(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <input
                        onChange={props.searchByName}
                        type="text"
                        className="form-control"
                        placeholder="Search by Name"
                        id="search"
                    />
                </div>
            </form>
        </div>

    )
}

export default Search;