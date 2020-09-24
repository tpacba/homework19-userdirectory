import React from "react";

function EmployeeCard({results}) {
  console.log(results);
  return (
    <div className="container">
      {results.map(item => (
        <div className="card mb-3" key={item.id.value}>
          <div className="row no-gutters">
            <div className="col-md-2 img-container">
              <img alt={item.name.last} src={item.picture.large} />
            </div>
            <div className="col-md-10">
              <div className="card-body content">
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeCard;