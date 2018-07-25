import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired
};

const Languages = ({ title }) => {
  return (
    <div className="languages">
      <h3>{title}</h3>
    </div>
  );
};

Languages.propTypes = propTypes;
export default Languages;
