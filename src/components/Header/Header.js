import React from 'react';
import { Link } from 'react-router-dom';
import parrot from '../../images/parrot.png';
import './Header.css';
import DropLog from './dropdown/DropLog/DropLog';
import dropdown from './dropdown/dropdown';

class Header extends React.Component {
  signOut = () => {
    window.localStorage.removeItem('token');
  };
  render() {
    console.log(window.localStorage.getItem('token'));
    return (
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img src={parrot} className="header__img" />
            <h1 className="header__h1">langly</h1>
          </div>
        </Link>

        <div className="header__div">
          {(!window.localStorage.getItem('token') &&
            window.location.pathname === '/') ||
          window.location.pathname === '/logout' ? (
            <div>
              {/* desktop header */}
              <p className="header__option__desktop">
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
              {/* mobile header */}
              <select className="header__option__mobile">
                <option value="English">EN</option>
                <option value="Spanish">SP</option>
                <option value="French">FR</option>
                <option value="Italian">IT</option>
              </select>
              <button
                className="header-button"
                onMouseOver={this.props.toggler}
              >
                Login
              </button>
              {this.props.toggle && (
                <span className="header__overlay login-overlay">
                  <button onClick={this.props.toggler}>x</button>
                  <DropLog />
                </span>
              )}
            </div>
          ) : (
            ''
          )}
          {!window.localStorage.getItem('token') &&
            window.location.pathname !== '/' && (
              <Link to="/signUp">
                <button className="header__button header__button-active">
                  Create profile
                </button>
              </Link>
            )}
          {window.localStorage.getItem('token') && (
            <Link to="/logout">
              <button onClick={this.signOut}>Sign Out</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default dropdown(Header);
