import React from "react";
import {
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

import { data } from "../data/data";

const Vaccine = () => {
  let params = useParams();
  let history = useHistory();
  let location = useLocation();
  let match = useRouteMatch();
  console.log(params);
  return (
    <Router>
      <>
        {data
          .filter((num) => num.name === params.name.toUpperCase())
          .map((vaccine) => {
            const { id, name, src, description } = vaccine;
            return (
              <div className="detail-container" key={id}>
                {/* <p className="detail-text">
                  Your Pathname: {location.pathname}
                </p>
                <p className="detail-text">Your Match Path: {match.path}</p> */}
                <p className="detail-text">{name}</p>
                <img className="detail-image" src={src} alt={name} />
                <p className="detail-description">{description}</p>
                <div className="button-container">
                  <button
                    className="navigation-button"
                    onClick={() => history.push("/")}
                  >
                    Go to Home Page
                  </button>
                  <Link to={`/vaccine/${name.toLowerCase()}/details/${id}`}>
                    <button className="navigation-button">
                      See the Details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </>
    </Router>
  );
};
export default Vaccine;
