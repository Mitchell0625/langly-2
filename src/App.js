import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== "/" ? <Header /> : ""}

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
