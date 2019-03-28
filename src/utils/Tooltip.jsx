import React from "react";
import PropTypes from "prop-types";
import "../styles/animations.css";

/**
 * Tooltip component mounts a floating div with a hint text.
 * @param {String} text: Text to be rendered in tooltip.
 * @param {Array} coordinates: Coordinates to determine tooltip's fixed position: [x, y].
 * @param {Array} colors: Colors to render tooltip with: [background color, text color].
 */
const Tooltip = ({ text, coordinates, colors }) => (
  <div
    id="tooltip"
    style={{
      left: `${coordinates[0]}px`,
      top: `${coordinates[1]}px`,
      width: `${text.length * 9 + 6}px`,
      backgroundColor: colors[0],
      color: colors[1]
    }}
  >
    {text}
  </div>
);

export default Tooltip;

Tooltip.propTypes = {
  text: PropTypes.string,
  coordinates: PropTypes.arrayOf(PropTypes.number),
  colors: PropTypes.arrayOf(PropTypes.string)
};

Tooltip.defaultProps = {
  text: "",
  coordinates: [0, 0],
  colors: ["#e5fdff", "#00051f"]
};
