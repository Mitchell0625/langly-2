import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = e => {
    this.setState(() => ({ [e.target.name]: e.target.value }));
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="username"
            type="email"
            placeholder="username"
            onChange={this.handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={this.handleInput}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
