import React from "react";
import PropTypes from "prop-types";
import "./Languages.css";

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selectLang: PropTypes.func.isRequired
};

const Languages = ({ id, title, selectLang }) => {
  return (
    <div className="languages" onClick={() => selectLang(id, title)}>
      <h3>{title}</h3>
    </div>
  );
};

Languages.propTypes = propTypes;
export default Languages;
