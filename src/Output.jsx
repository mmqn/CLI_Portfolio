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
    <p
      key="title"
      className="Heading Underlined"
      style={{
        marginTop: "40px",
        color: contentColor
      }}
    >
      {result.Title}
    </p>
    {result.Content.map((item, index) => {
      return (
        <p
          key={`result-${index}`}
          className="Output"
          style={{ color: contentColor }}
          >
            {item}
          </p>
      )
    })}
  </React.Fragment>
);

export default Output;

Output.propTypes = {
  result: PropTypes.shape({}),
  uiColors: PropTypes.shape({})
};

Output.defaultProps = {
  result: { Title: "Oh dear, looks like something went wrong 😦", Content: ['']},
  contentColor: "#e5fdff"
};
