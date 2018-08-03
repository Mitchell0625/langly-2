import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from './Footer/Footer';
import './Landing.css';

const Landing = () => (
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

export default Landing;
