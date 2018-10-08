import React, { Component } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Upload from '../Upload/Upload';
import Message from '../Message/Message';
import dropdown from '../Header/dropdown/dropdown';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    learning: '',
    background: 'white',
    switch: false
  };
  componentDidMount = () => {
    // let hasLang = window.localStorage.getItem('learnlanguage');
    // if (hasLang) {
    //   this.setState(() => {
    //     learning: hasLang;
    //   });
    // }
    const toke = localStorage.getItem('token');
    if (!toke) {
      this.props.toggler();
      this.setState(() => ({ background: 'gray' }));
    }
    console.log(this.props.toggle);
  };

  signInOverlay = () => {
    this.props.toggler();
    this.setState(() => ({ background: 'white' }));
  };

  toggleLogin = () => {
    this.setState({ switch: true });
  };

  toggleRegister = () => {
    this.setState({ switch: false });
  };

  //api call to translate based on this.state.learning
  render() {
    return (
      <div
        className="dashboard"
        style={{ backgroundColor: `${this.state.background}` }}
      >
        <h1>Dashboard</h1>
        {this.props.toggle && (
          <div className="dashboard__overlay">
            <button
              className="dashboard__overlay__close"
              onClick={() => this.signInOverlay()}
            >
              &times;
            </button>

            {this.state.switch ? (
              <Login
                toggler={this.signInOverlay}
                toggleRegister={this.toggleRegister}
              />
            ) : (
              <Register
                toggler={this.signInOverlay}
                toggleLogin={this.toggleLogin}
              />
            )}
          </div>
        )}
        {this.props.user || localStorage.getItem('token') ? (
          <div className="dashboard__upload">
            <Upload />
            <Message />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default dropdown(Dashboard);
