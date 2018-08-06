import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="login">
        <h2>Sign In</h2>
        <form className="login__form">
          <div className="login__form__fields">
            <p>Username/Email</p>
            <input
              name="username"
              type="email"
              placeholder="username"
              onChange={this.handleInput}
            />
          </div>
          <div className="login__form__fields">
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleInput}
            />
          </div>
          <button className="login__form__button">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
