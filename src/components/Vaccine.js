import React from "react";
import {
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
  Link,
} from "react-router-dom";

import { data } from "../data/data";
import { nested } from "../data/nested";
import DynamicScrollToTop from "./ScrollToTopController";

const Vaccine = () => {
  let params = useParams();
  let history = useHistory();
  let location = useLocation();
  let { path } = useRouteMatch();
  return (
    <>
      <DynamicScrollToTop />
      {data
        .filter((num) => num.name === params.name.toUpperCase())
        .map((vaccine) => {
          const { id, name, src, description } = vaccine;
          if (name === "NUCLEIC ACID") {
            return (
              <div className="detail-container" key={id}>
                <div className="nested-navbar-container">
                  {nested.map((vaccine) => {
                    const { id, src, name } = vaccine;
                    let vaccineType = "NUCLEIC ACID";
                    return (
                      <Link
                        key={id}
                        to={`/vaccine/${vaccineType.toLowerCase()}/brand/${name.toLowerCase()}`}
                      >
                        <div className="nested-navbar-inner-container">
                          <img
                            className="nested-navbar-image"
                            src={src}
                            alt={name}
                          />
                          <span className="nested-navbar-text">{name}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
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
          }
          return (
            <div className="detail-container" key={id}>
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
                  <button className="navigation-button">See the Details</button>
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Vaccine;
