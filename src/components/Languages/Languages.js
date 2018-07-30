import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Languages.css';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selectLang: PropTypes.func.isRequired
};

const Languages = ({ id, title, selectLang }) => {
  return (
    <Link to="/welcome">
      <div className="languages" onClick={() => selectLang(id, title)}>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

Languages.propTypes = propTypes;
export default Languages;
