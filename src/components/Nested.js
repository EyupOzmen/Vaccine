import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { nested } from "../data/nested";

import DynamicScrollToTop from "./ScrollToTopController";

const Nested = () => {
  let { brand } = useParams();
  let history = useHistory();
  return (
    <>
      <DynamicScrollToTop />
      {nested
        .filter((vaccineBrand) => vaccineBrand.name === brand.toUpperCase())
        .map((item) => {
          const { id, name, src, title, description } = item;
          return (
            <div className="nested-content-container" key={id}>
              <p className="nested-brand-name">{name}</p>
              <img className="nested-brand-image" src={src} alt={name} />
              <h3 className="nested-brand-title">{title}</h3>
              {description.map((article, index) => (
                <p className="nested-brand-article" key={index}>
                  * {article}
                </p>
              ))}
              <button
                className="navigation-button"
                onClick={() => history.goBack()}
              >
                Go Back
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Nested;
