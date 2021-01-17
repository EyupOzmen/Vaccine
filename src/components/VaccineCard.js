import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

const VaccineCard = ({ id, src, name }) => {
  return (
    <Router>
      <Link to={`/vaccine/${name.toLowerCase()}`}>
        <div className="card">
          <img className="card-image" src={src} alt="" />
          <p className="card-text">{name}</p>
        </div>
      </Link>
    </Router>
  );
};

export default VaccineCard;
