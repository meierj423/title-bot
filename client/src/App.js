import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./componenets/Nav";
import Home from "./pages/Home";
import Saved from "./pages/History";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
