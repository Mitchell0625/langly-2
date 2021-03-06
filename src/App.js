import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import SelectLang from './components/SelectLang/SelectLang';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== '/' ? <Header /> : ''}

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={SelectLang} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={Register} />
          <Route path="/content" component={Dashboard} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
