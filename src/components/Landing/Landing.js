import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
const Landing = () => {
  return (
    <div className="landing">
      <h2>Learn a language for free. Forever.</h2>
      <Link to="/register">Get Started</Link>
      <Footer />
    </div>
  );
};

export default Landing;
