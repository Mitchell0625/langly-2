import React, { Component } from 'react';

class DropLog extends Component {
  state = {
    username: '',
    password: ''
  };
  render() {
    return (
      <div className="droplog">
        <button>Sign In with Google</button>
        <button>Sign In with Facebook</button>
        <p>or</p>
        <input name="username" type="email" />
        <input name="password" type="password" />
      </div>
    );
  }
}

export default DropLog;
