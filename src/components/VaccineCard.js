import React from "react";

import { Link } from "react-router-dom";

const VaccineCard = ({ id, src, name }) => {
  return (
    <>
      <Link to={`/vaccine/${name.toLowerCase()}`}>
        <div className="card">
          <img className="card-image" src={src} alt="" />
          <p className="card-text">{name}</p>
        </div>
      </Link>
    </>
  );
};

export default VaccineCard;
