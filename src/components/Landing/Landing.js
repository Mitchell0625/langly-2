import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from './Footer/Footer';
import './Landing.css';

const Landing = () => (
  <div className="landing">
    <Header />
    <div className="landing__div">
      <div>
        <h2>Learn a language for free. Forever.</h2>
        <Link to="/register">Get Started</Link>
        <p>I already have an account</p>
      </div>
      <div className="landing__footer small">
        <Footer />
      </div>
    </div>
  </div>
);

export default Landing;
