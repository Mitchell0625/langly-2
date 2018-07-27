import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Languages from "../Languages/Languages";
import { getLanguages } from "../../ducks/registerReducer";
import "./Register.css";

class Register extends Component {
  state = {};

  componentDidMount() {
    this.props.getLanguages();
  }

  setSession() {}
  render() {
    // let viewLanguages = this.props.languages.map((e, i) => {
    //   return <Languages key={i} title={e.title} />;
    // });
    return (
      <div className="register">
        {/* <div className="register__div">{viewLanguages}</div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.registerReducer };
}

export default connect(
  mapStateToProps,
  { getLanguages }
)(Register);
