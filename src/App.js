import './App.css';
import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Portfolio } from "./components";

import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
    <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/portfolio" exact component={() => <Portfolio />} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
