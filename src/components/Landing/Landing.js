import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__div">
        <div>
          <h2>Learn a language for free. Forever.</h2>
          <Link to="/register">Get Started</Link>
        </div>
        <div className="landing__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
