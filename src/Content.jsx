import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "./utils/ErrorBoundary";
import { link } from "fs";

/**
 * @param {String} title: Title for content.
 * @param {String} description: Subheading/subtitle underneath title.
 * @param {Array} content: Content to go in content body.
 * @param {String} color: Color of text matching current theme (i.e. light or dark mode).
 */
const Content = ({ title, description, content, color }) => {
  const email = (
    <a
      href="mailto:mmqn.michael@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="35" height="35" viewBox="0 0 300 300">
        <path style={{ fill: color }} d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150 C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009 c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749 l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721 c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0 c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721 c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749 V196.423z" />
      </svg>
    </a>
  );
  
  const linkedIn = (
    <a
      href="https://www.linkedin.com/in/michaelmqn/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="35" height="35" viewBox="0 0 520 520">
        <path style={{ fill: color }} d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
      </svg>
    </a>
  );
  
  return (
  <ErrorBoundary>
    <div id="content-header" style={{ color }}>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
    <div id="content-body" style={{ color }}>
      {content.map(paragraph => (
        <p key={paragraph.substring(0, 9)}>{paragraph}</p>
      ))}
      {title && email}
      <span style={{ padding: "0px 8px" }} />
      {title && linkedIn}
    </div>
  </ErrorBoundary>
)};

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
