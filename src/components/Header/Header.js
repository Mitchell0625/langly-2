import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__h1">langly</h1>
      <div className="header__div">
        <p className="header__option">
          Site language:{" "}
          <span>
            <select>
              <option value="English">English</option>
            </select>
          </span>
        </p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
