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
        <form className="login__form">
          <div className="login__form__fields">
            <p>Username/Email</p>
            <input
              name="username"
              type="email"
              placeholder="username"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="login__form__fields">
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleInput}
              required
            />
          </div>
          <button className="login__form__button">Login</button>
        </form>
        <p>
          Need to create an account?{' '}
          <span onClick={() => this.props.toggleRegister()}>Sign Up</span>
        </p>
      </div>
    );
  }
}

export default Login;
