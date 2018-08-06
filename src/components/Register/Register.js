import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPass: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log('submit');
  };

  render() {
    return (
      <div className="register">
        <h2>Sign Up</h2>
        <form className="register__form" onSubmit={this.handleSubmit}>
          <div className="register__form__fields">
            <p>Name</p>
            <input
              name="name"
              placeholder="Enter Name"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="register__form__fields">
            <p>Email</p>
            <input
              name="email"
              placeholder="Enter Email"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="register__form__fields">
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="register__form__fields">
            <p>Confirm Password</p>
            <input
              name="confirmPass"
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleInput}
              required
            />
          </div>
          <button
            // className="register__form__button"
            type="submit"
            value="Submit"
          >
            Submit Profile
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <span onClick={() => this.props.toggleLogin()}>Sign In</span>
        </p>
      </div>
    );
  }
}

export default Register;
