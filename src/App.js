import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
