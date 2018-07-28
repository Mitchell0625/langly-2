import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Languages from "../Languages/Languages";
import { selectLanguage } from "../../ducks/registerReducer";
import "./Register.css";

class Register extends Component {
  state = {
    languages: []
  };

  componentDidMount = () => {
    axios
      .get("/api/getlang")
      .then(resp => {
        this.setState(() => ({ languages: resp.data }));
      })
      .catch(err => console.log(err));
  };
  selectLanguage = (id, title) => {
    this.props.selectLanguage({ id, title });
  };
  setSession() {}
  render() {
    console.log(this.props);
    const viewLanguages = this.state.languages.map((e, i) => {
      return (
        <Languages
          key={i}
          id={e.id}
          title={e.title}
          selectLang={this.selectLanguage}
        />
      );
    });
    return (
      <div className="register">
        <p>I want to learn ...</p>
        <div className="register__div">{viewLanguages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  { selectLanguage }
)(Register);
