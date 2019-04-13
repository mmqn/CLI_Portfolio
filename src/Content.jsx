import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "./utils/ErrorBoundary";

/**
 * @param {String} title: Title for content.
 * @param {String} description: Subheading/subtitle underneath title.
 * @param {Array} content: Content to go in content body.
 * @param {String} color: Color of text matching current theme (i.e. light or dark mode).
 */
const Content = ({ title, description, content, color }) => (
  <ErrorBoundary>
    <div id="content-header" style={{ color }}>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
    <div id="content-body" style={{ color }}>
      {content.map(paragraph => (
        <p key={paragraph.substring(0, 4)}>{paragraph}</p>
      ))}
    </div>
  </ErrorBoundary>
);

export default Content;

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string
};

Content.defaultProps = {
  title: "Oh dear, looks like something went wrong 😦",
  description: "",
  content: [""],
  color: "#000e4a"
};
