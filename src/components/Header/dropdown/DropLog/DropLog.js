import React, { Component } from 'react';
import './DropLog.css';

class DropLog extends Component {
  state = {
    username: '',
    password: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {};
  render() {
    return (
      <div className="droplog">
        <p>Username</p>
        <input
          name="username"
          placeholder="Username"
          type="email"
          onChange={this.handleInput}
        />
        <p>Password</p>
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={this.handleInput}
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default DropLog;
