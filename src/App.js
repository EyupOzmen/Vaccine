import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Vaccine from "./components/Vaccine";
import Detail from "./components/Detail";

const App = () => {
  return (
    <Router>
      <main className="main-container">
        <section className="glass">
          <Switch>
            <Route path="/vaccine/:name/details/:id">
              <Detail />
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
    </Router>
  );
};

export default App;
