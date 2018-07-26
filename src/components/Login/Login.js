import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
      <div>
        <button>Sign In with Google</button>
        <button>Sign In with Facebook</button>
        <p>or</p>
        <input name="username" type="email" />
        <input name="password" type="password" />
      </div>
    );
  }
}

export default dropdown(Login);
