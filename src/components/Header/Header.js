import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__h1">langly</h1>
      </Link>
      <div className="header__div">
        <p className="header__option">
          Site language:{" "}
          <span>
            <select>
              <option value="English">English</option>
            </select>
          </span>
        </p>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
