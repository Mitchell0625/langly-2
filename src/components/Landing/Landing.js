import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from './Footer/Footer';
import { getLanguages } from '../../ducks/registerReducer';
import './Landing.css';

class Landing extends Component {
  componentDidMount = () => {
    this.props.getLanguages();
  };
  render() {
    return (
      <div className="landing">
        <Header />
        <div className="landing__div">
          <h2>Learn a language for free. Forever.</h2>
          <Link to="/register" className="landing__button">
            Get Started
          </Link>
          <p>I already have an account</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  { getLanguages }
)(Landing);
