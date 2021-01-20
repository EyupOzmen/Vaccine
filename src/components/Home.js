import React from "react";

import DynamicScrollToTop from "./ScrollToTopController";
import VaccineCard from "./VaccineCard";
import vaccines from "../assets/vaccines.jpg";
import { data } from "../data/data";

const Home = () => {
  return (
    <>
      <DynamicScrollToTop />
      <div className="dashboard">
        {data.map((vaccine) => {
          const { id, src, name } = vaccine;
          return <VaccineCard id={id} key={id} src={src} name={name} />;
        })}
      </div>
      <div className="info">
        <h1>THE FOUR MAIN TYPES OF COVID-19 VACCINE </h1>
        <img className="home-image" src={vaccines} alt="vaccines" />
        <p className="home-text">
          There are four categories of vaccines in clinical trials: WHOLE VIRUS,
          PROTEIN SUBUNIT, VIRAL VECTOR and NUCLEIC ACID (RNA AND DNA). Some of
          them try to smuggle the antigen into the body, others use the body’s
          own cells to make the viral antigen.
        </p>
      </div>
    </>
  );
};

export default Home;
