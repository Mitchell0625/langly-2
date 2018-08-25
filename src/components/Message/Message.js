//another option for uploading
import React, { Component } from 'react';

class Message extends Component {
  state = {
    message: '',
    selected: localStorage.getItem('learnLanguage') || 'en'
  };

  handleMessage = e => {
    this.setState({ message: e.target.value });
  };

  handleSelect = e => {
    this.setState({ selected: e.target.value });
  };
  render() {
    console.log(this.state.selected);
    return (
      <div className="message">
        <textarea
          type="text"
          placeholder="Copy/paste text"
          value={this.state.message}
          onChange={this.handleMessage}
        />
        {!localStorage.getItem('learnLanguage') && (
          <div>
            <p>Select Language</p>
            <select value={this.state.selected} onChange={this.handleSelect}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="sp">Spanish</option>
            </select>
          </div>
        )}
        <button>Translate</button>
      </div>
    );
  }
}

export default Message;
