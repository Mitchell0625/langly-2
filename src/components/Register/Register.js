import React, { Component } from 'react';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log('submit');
  };

  render() {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            name="name"
            placeholder="Enter Name"
            onChange={this.handleInput}
            required
          />
          <p>Email</p>
          <input
            name="email"
            placeholder="Enter Email"
            onChange={this.handleInput}
            required
          />
          <p>Password</p>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={this.handleInput}
            required
          />
          <p>Confirm Password</p>
          <input
            name="confirmPass"
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleInput}
            required
          />
          <button type="submit" value="Submit">
            Submit Profile
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
