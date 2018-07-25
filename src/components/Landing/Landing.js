import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing__div">
      <h1>langly</h1>
      <Link to="/register">Get Started</Link>
    </div>
  );
};

export default Landing;
