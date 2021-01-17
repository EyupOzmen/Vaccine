import React from "react";
import {
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import { details } from "../data/detail";

const Detail = () => {
  let params = useParams();
  let history = useHistory();
  let location = useLocation();
  let match = useRouteMatch("/vaccine/:name/details/:id");
  console.log("paarams", params);
  console.log("history", history);
  console.log("location", location);
  console.log("match", match);
  const {
    src,
    name,
    description,
    titleOne,
    detailsOne,
    titleTwo,
    detailsTwo,
  } = details[0];

  return (
    <div className="inner-detail-container">
      {params.id === "1" ? (
        <div className="inner-detail">
          <h1>{name}</h1>
          <img className="inner-detail-image" src={src} alt={name} />
          <p className="inner-detail-description">{description}</p>
          <h3>{titleOne}</h3>
          <div className="inner-detail-text-container">
            {detailsOne.map((detail, index) => {
              return (
                <p className="inner-detail-text" key={index}>
                  * {detail}
                </p>
              );
            })}
          </div>
          <h3>{titleTwo}</h3>
          <div className="inner-detail-text-container">
            {detailsTwo.map((detail, index) => {
              return (
                <p className="inner-detail-text" key={index}>
                  * {detail}
                </p>
              );
            })}
          </div>
          <button
            className="navigation-button"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </div>
      ) : (
        <>
          {details
            .filter((item) => item.id === parseInt(params.id))
            .map((detail) => {
              const { id, src, name, description, title, details } = detail;
              return (
                <div className="inner-detail" key={id}>
                  <h1>{name}</h1>
                  <img className="inner-detail-image" src={src} alt={name} />
                  <p className="inner-detail-description">{description}</p>
                  <h3>{title}</h3>
                  <div className="inner-detail-text-container">
                    {details.map((detail, index) => {
                      return (
                        <p className="inner-detail-text" key={index}>
                          {" "}
                          * {detail}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          <button
            className="navigation-button"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default Detail;
