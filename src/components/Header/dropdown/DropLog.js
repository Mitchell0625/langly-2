import React, { Component } from "react";
import dropdown from "./dropdown";

class DropLog extends Component {
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

export default dropdown(DropLog);
