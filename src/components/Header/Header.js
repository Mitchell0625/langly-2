import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>langly</h1>
      <div>
        <p>
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
