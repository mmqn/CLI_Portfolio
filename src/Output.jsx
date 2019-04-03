import React from "react";
import PropTypes from "prop-types";

/**
 * @param {String} title
 * @param {String} description
 * @param {Array} content
 * @param {String} color
 */
const Output = ({ title, description, content, color }) => (
  <React.Fragment>
    <div id="content-leftbar">
      <h1 style={{ color }}>{title}</h1>
      <h2 style={{ color }}>{description}</h2>
    </div>
    <div id="content-rightbar">
      {content.map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </div>
  </React.Fragment>
);

export default Output;

Output.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
};

Output.defaultProps = {
  title: "Oh dear, looks like something went wrong 😦",
  description: "",
  content: [""],
  color: "#000e4a"
};
