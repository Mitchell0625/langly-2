import React, { Component } from 'react';
import Register from '../Register/Register';
import dropdown from '../Header/dropdown/dropdown';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    learning: '',
    background: 'white'
  };
  componentDidMount = () => {
    let hasLang = localStorage.getItem('learnlanguage');
    if (hasLang) {
      this.setState(() => {
        learning: hasLang;
      });
    }
    this.props.toggler();

    this.setState(() => ({ background: 'gray' }));

    console.log(this.props.toggle);
  };

  signInOverlay = () => {
    this.props.toggler();
    this.setState(() => ({ background: 'white' }));
  };

  //api call to translate based on this.state.learning
  render() {
    return (
      <div
        className="dashboard"
        style={{ backgroundColor: `${this.state.background}` }}
      >
        <h1>Dashboard</h1>
        {this.props.toggle && (
          <div className="dashboard__overlay">
            <button onClick={() => this.signInOverlay()}>&times;</button>
            <Register />
          </div>
        )}
      </div>
    );
  }
}

export default dropdown(Dashboard);
