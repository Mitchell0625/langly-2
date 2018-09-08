import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../ducks/registerReducer';
import './Register.css';

const propTypes = {
  toggleLogin: PropTypes.func,
  toggler: PropTypes.func,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

const defaultProps = {
  toggleLogin: PropTypes.func,
  toggler: PropTypes.func
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
      flag: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.matchingPass = this.matchingPass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitted = this.submitted.bind(this);
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.matchingPass();
    });
  };

  matchingPass = () => {
    const { password, confirmPass } = this.state;
    if (password !== '' && confirmPass !== '' && password !== confirmPass) {
      this.setState({ flag: true });
    } else {
      this.setState({ flag: false });
    }
  };

  handleSubmit = e => {
    this.props
      .signUp(this.state.name, this.state.email, this.state.password)
      .then(user => localStorage.setItem('token', user.token))
      .then(() => this.props.toggler())
      .catch(err => console.log(err));
    e.preventDefault();
  };

  submitted = e => {
    console.log('hit');
    this.props
      .signUp(this.state.name, this.state.email, this.state.password)
      .then(user => localStorage.setItem('token', user.token))
      .then(() => this.props.history.push('/content'))
      .catch(err => console.log(err));
    e.preventDefault();
  };

  render() {
    console.log(this.state.flag);
    return (
      <div className="register">
        {this.state.flag && <p>Passwords do not match</p>}
        <form
          className="register__form"
          onSubmit={
            this.props.pathName === '/content'
              ? this.handleSubmit
              : this.submitted
          }
        >
          <div className="register__form__fields">
            <p>Name</p>
            <input
              name="name"
              placeholder="Enter Name"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="register__form__fields">
            <p>Email</p>
            <input
              name="email"
              placeholder="Enter Email"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="register__form__fields">
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="register__form__fields">
            <p>Confirm Password</p>
            <input
              name="confirmPass"
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleInput}
              required
            />
          </div>
          <button
            className="register__form__button"
            type="submit"
            value="Submit"
          >
            Submit Profile
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <span onClick={() => this.props.toggleLogin()}>Sign In</span>
        </p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
Register.propTypes = propTypes;
Register.defaultProps = defaultProps;

export default withRouter(
  connect(
    mapStateToProps,
    { signUp }
  )(Register)
);
