import React from 'react';
import { Link } from 'react-router-dom';
import parrot from '../../images/parrot.png';
import './Header.css';
import DropLog from './dropdown/DropLog/DropLog';
import dropdown from './dropdown/dropdown';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img src={parrot} className="header__img" />
            <h1 className="header__h1">langly</h1>
          </div>
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
              <button onMouseOver={this.props.toggler}>Login</button>
              {this.props.toggle && (
                <span className="header__overlay">
                  <button onClick={this.props.toggler}>x</button>
                  <DropLog />
                </span>
              )}
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
  }
}

export default dropdown(Header);
