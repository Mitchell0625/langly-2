import React, { Component } from 'react';

class Goal extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="radio" value="50 xp" />
          <p>50 xp</p>

          <input type="radio" value="30 xp" />
          <p>30 xp</p>

          <input type="radio" value="20 xp" />
          <p>20 xp</p>

          <input type="radio" value="10 xp" />
          <p>10 xp</p>
          <button>Set Goal</button>
        </form>
      </div>
    );
  }
}

export default Goal;
