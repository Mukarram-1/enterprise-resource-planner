import React from "react";
import "./analyticscard.css"

const Analyticscard = ({ icon, heading, number }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-number">{number}</p>
      </div>
    </div>
  );
};

export default Analyticscard;
