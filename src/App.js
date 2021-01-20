import React from "react";
import { Route, Switch } from "react-router-dom";

import DynamicScrollToTop from "./components/ScrollToTopController";
import Home from "./components/Home";
import Vaccine from "./components/Vaccine";
import Detail from "./components/Detail";
import Nested from "./components/Nested";

const App = () => {
  return (
    <>
      <DynamicScrollToTop />
      <main className="main-container">
        <section className="glass">
          <Switch>
            <Route path="/vaccine/:name/details/:id">
              <Detail />
            </Route>
            <Route path="/vaccine/:name/brand/:brand">
              <Nested />
            </Route>
            <Route path="/vaccine/:name">
              <Vaccine />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </main>
    </>
  );
};

export default App;
