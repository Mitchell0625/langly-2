import React, { Component } from "react";
import axios from "axios";
import Languages from "../Languages/Languages";
import "./Register.css";

class Register extends Component {
  state = {
    languages: []
  };

  componentDidMount() {
    axios
      .get("/api/getlang")
      .then(resp => {
        this.setState(() => ({ languages: resp.data }));
      })
      .catch(err => console.log(err));
  }
  setSession() {}
  render() {
    const viewLanguages = this.state.languages.map((e, i) => {
      return <Languages key={i} title={e.title} />;
    });
    return (
      <div className="register">
        <div className="register__div">{viewLanguages}</div>
      </div>
    );
  }
}

export default Register;
