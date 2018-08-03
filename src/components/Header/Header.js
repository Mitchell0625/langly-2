import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1 className="header__h1">langly</h1>
    </Link>

    <div className="header__div">
      {window.location.pathname === '/' ? (
        <div>
          <p className="header__option">
            Site language:{' '}
            <span>
              <select>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
              </select>
            </span>
          </p>
          <button>Login</button>
        </div>
      ) : (
        ''
      )}
      {window.location.pathname === '/register' && (
        <button>Create profile</button>
      )}
    </div>
  </div>
);

export default Header;
