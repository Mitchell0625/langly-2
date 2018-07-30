import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectGoal } from '../../../ducks/registerReducer';
class Goal extends Component {
  state = {
    goal: ''
  };

  handleGoal(val) {
    this.setState({ goal: val });
  }
  selectGoal(e) {
    this.props.selectGoal(this.state.goal);
    e.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.selectGoal}>
          <input
            name="goal"
            type="radio"
            value="50 xp"
            onChange={e => this.handleGoal(e.target.value)}
          />
          <p>50 xp</p>

          <input
            name="goal"
            type="radio"
            value="30 xp"
            onChange={e => this.handleGoal(e.target.value)}
          />
          <p>30 xp</p>

          <input
            name="goal"
            type="radio"
            value="20 xp"
            onChange={e => this.handleGoal(e.target.value)}
          />
          <p>20 xp</p>

          <input
            name="goal"
            type="radio"
            value="10 xp"
            onChange={e => this.handleGoal(e.target.value)}
          />
          <p>10 xp</p>
          <button type="submit" value="Submit">
            Set Goal
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  { selectGoal }
)(Goal);
