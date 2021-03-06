import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Languages from '../Languages/Languages';
import { selectLanguage, getLanguages } from '../../ducks/registerReducer';
import './SelectLang.css';

class SelectLang extends Component {
  state = {
    languages: []
  };

  componentDidMount = () => {
    this.props.getLanguages();
  };
  selectLanguage = (id, title) => {
    this.props.selectLanguage({ id, title });
    this.setLanguage(title);
  };

  setLanguage = item => {
    localStorage.setItem('learnLanguage', item);
  };
  render() {
    console.log(this.props);
    const viewLanguages = this.props.languages.map((e, i) => {
      return (
        <Languages
          key={i}
          id={e.id}
          title={e.title}
          flag={e.flag}
          selectLang={this.selectLanguage}
        />
      );
    });
    return (
      <div className="selectlang">
        <p>I want to learn ...</p>
        <div className="selectlang__div">{viewLanguages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  { selectLanguage, getLanguages }
)(SelectLang);
