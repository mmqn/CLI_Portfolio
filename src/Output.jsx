import React from "react";
import PropTypes from "prop-types";
import "./styles/App.css";

/**
 * Tooltip component mounts a floating div with a hint text.
 * @param {Array} result: Array of content to be printed.
 * @param {String} contentColor: Color of output text.
 */
const Output = ({ result, contentColor }) => (
  <React.Fragment>
    {result.map((item, index) => {
      if (index === 0) {
        return (
          <p
            key="title"
            className="Heading Underlined"
            style={{
              marginTop: "40px",
              color: contentColor
            }}
          >
            {item}
          </p>
        );
      } else {
        return (
          <p
            key={`result-${index}`}
            className="Output"
            style={{ color: contentColor }}
          >
            {item}
          </p>
        );
      }
    })}
  </React.Fragment>
);

export default Output;

Output.propTypes = {
  result: PropTypes.arrayOf(PropTypes.string),
  uiColors: PropTypes.shape({})
};

Output.defaultProps = {
  result: ["Oh dear, looks like something went wrong 😦"],
  contentColor: "#e5fdff"
};
