import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, addingTask, toggleAdd }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={toggleAdd}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Submit",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
