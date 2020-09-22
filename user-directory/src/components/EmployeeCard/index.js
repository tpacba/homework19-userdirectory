import React from "react";
import "./style.css";

function EmployeeCard({results}) {
  console.log(results);
  return (
    <div className="card-columns">
      {results.map(item => (
        <div className="card" key={item.id.value}>
          <div className="img-container">
              <img alt={item.name.last} src={item.picture.large} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {item.name.first} {item.name.last}
                </li>
                <li>
                  <strong>Phone:</strong> {item.phone}
                </li>
                <li>
                  <strong>City:</strong> {item.location.city}, {item.location.state}
                </li>
              </ul>
            </div>
          </div>
      ))}
    </div>
  );
}

export default EmployeeCard;