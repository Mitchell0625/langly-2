import React, { Component } from 'react';

class Dashboard extends Component {
  state = {
    learning: ''
  };
  componentDidMount = () => {
    let hasLang = localStorage.getItem('learnlanguage');
    if (hasLang) {
      this.setState(() => {
        learning: hasLang;
      });
    }
  };

  //api call to translate based on this.state.learning
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
