import React, { Component, Fragment } from "react";
import "./styles/app.css";
import "./styles/animations.css";
import colors from "./utils/colors";
// import Tooltip from "./utils/Tooltip";
// import Output from "./Output";
// import resultSet from "./utils/resultSet";

class CLIPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      mountSubheading: true
    };
    this.resetQuery = this.resetQuery.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
  }

  // shouldComponentUpdate(nextState) {
  //   if (nextState.state !== this.state.state) {
  //     return true;
  //   }
  //   return false;
  // }

  resetQuery() {
    document.getElementById("input").focus();

    this.setState({
      query: ""
    });
  }

  updateQuery(ev) {
    this.setState({
      query: ev.target.value,
      mountSubheading: false
    });
  }

  handleCommand(ev) {
    const { key } = ev;
    const { query } = this.state;
    const { resetQuery } = this;

    if (key === "Escape") {
      resetQuery();
    } else if (query === "?") {
      this.setState({
        mountCommandsList: true
      });
    } else if (/hello/i.test(query) || /about/i.test(query)) {
      this.setState({});
    } else if (/skills/i.test(query)) {
      this.setState({});
    } else if (/experience/i.test(query)) {
      this.setState({});
    } else if (/projects/i.test(query)) {
      this.setState({});
    } else if (/classes/i.test(query)) {
      this.setState({});
    } else if (/flip/i.test(query)) {
      this.setState({});
    } else {
      this.setState({});
    }
  }

  // flipUI() {
  //   const { uiColors } = this.state;
  //   const { resetQuery } = this;
  //
  //   if (uiColors.BaseColor === colors.) {
  //     this.setState({
  //       uiColors: lightUIColors,
  //       columnColors: lightcolumnColors,
  //       mountTooltip: false
  //     });
  //   } else if (uiColors.BaseColor === colors.) {
  //     this.setState({
  //       uiColors: darkUIColors,
  //       columnColors: darkcolumnColors,
  //       mountTooltip: false
  //     });
  //   }
  //
  //   resetQuery();
  // }

  render() {
    const { query, mountSubheading } = this.state;
    const { resetQuery, updateQuery, handleCommand } = this;

    document.getElementsByTagName("body")[0].bgColor = colors.LightMain;

    const logo = (
      <svg
        id="keycap_logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        width="250"
        height="250"
      >
        <title>keycap_logo</title>
        <path
          d="M454.93,803.41L45.4723,567.0093c-25.7578-14.8712-22.5275-40.8473,7.215-58.0191l391.89-226.2579C474.32,265.56,519.3118,263.6954,545.07,278.5666L954.5277,514.9674c25.7578,14.8712,22.5275,40.8473-7.215,58.0191l-391.89,226.2579C525.68,816.4163,480.6882,818.2813,454.93,803.41Z"
          style={{
            fill: colors.DarkMain,
            stroke: colors.LightMain,
            strokeMiterlimit: "10",
            strokeWidth: "16px"
          }}
        />
        <line
          x1="28.0831"
          y1="540.9884"
          x2="28.0831"
          y2="500.643"
          style={{
            fill: "none",
            stroke: colors.LightMain,
            strokeMiterlimit: "10",
            strokeWidth: "16px"
          }}
        />
        <line
          x1="971.9169"
          y1="540.9884"
          x2="971.9169"
          y2="498.3377"
          style={{
            fill: "none",
            stroke: colors.LightMain,
            strokeMiterlimit: "10",
            strokeWidth: "16px"
          }}
        />
        <path
          d="M454.93,763.0647L45.4723,526.664c-25.7578-14.8712-22.5275-40.8473,7.215-58.0191l391.89-226.2579C474.32,225.215,519.3118,223.35,545.07,238.2213L954.5277,474.6221c25.7578,14.8712,22.5275,40.8473-7.215,58.0191l-391.89,226.2579C525.68,776.071,480.6882,777.936,454.93,763.0647Z"
          style={{
            fill: colors.DarkMain,
            stroke: colors.LightMain,
            strokeMiterlimit: "10",
            strokeWidth: "16px"
          }}
        />
        <path
          d="M370.85,528.4756l117.4048-67.7837-133.43,23.92-18.8505-10.8834,41.4273-77.0377L259.9971,464.4747,225.31,444.448,402.6674,342.0506,439.8707,363.53l-48.1341,88.74,154.21-27.4969,36.951,21.3337L405.5406,548.5042Z"
          style={{ fill: colors.LightMain }}
        />
        <path
          d="M591.0852,524.388l-113.6576,65.62-34.6871-20.0266L620.098,467.5842l26.8967,15.5288L623.5941,604.016l116.1546-67.0619,34.6906,20.0286L597.3326,659.2354,569.1778,642.98Z"
          style={{ fill: colors.LightMain }}
        />
        <line
          x1="257.0796"
          y1="560.3206"
          x2="396.6354"
          y2="640.8931"
          style={{
            fill: "none",
            stroke: colors.LightMain,
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            strokeWidth: "14px"
          }}
        />
      </svg>
    );

    const credits = (
      <div id="credits" style={{ color: colors.DarkMain }}>
        Built using&nbsp;[
        <a
          className="light-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>
        ,&nbsp;
        <a
          className="light-link"
          href="http://www.colorbox.io/#steps=9#hue_start=230#hue_end=185#hue_curve=easeInQuad#sat_start=100#sat_end=5#sat_curve=linear#sat_rate=200#lum_start=12#lum_end=100#lum_curve=easeInQuad#lock_hex="
          target="_blank"
          rel="noopener noreferrer"
        >
          ColorBox
        </a>
        ,&nbsp;
        <a
          className="light-link"
          href="https://www.youtube.com/watch?v=HEXWRTEbj1I"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </a>
        ]
      </div>
    );

    return (
      <Fragment>
        <div
          id="top-panel"
          style={
            mountSubheading
              ? { backgroundColor: colors.DarkMain, height: "240px" }
              : { backgroundColor: colors.DarkMain, height: "140px" }
          }
        >
          <p
            className="heading"
            style={{ color: colors.LightMain }}
            role="button"
            tabIndex="0"
            onClick={() => window.location.reload()}
          >
            Michael M. Q. Nguyen
          </p>
          {mountSubheading && (
            <p className="subheading" style={{ color: colors.LightMain }}>
              I code designs & design code.
              <br />
              Your cursor is hot and ready to fire,
              <br />
              just go ahead and type ‘hello’!
            </p>
          )}
          <div style={{ margin: "-10px -10px", paddingTop: "15px" }}>
            <span
              className="input-bracket pulse"
              role="button"
              tabIndex="0"
              onClick={resetQuery}
            >
              [
            </span>
            <input
              id="input"
              type="text"
              value={query}
              // sets query state equal to input value
              onChange={updateQuery}
              // runs command logic on key up
              onKeyUp={handleCommand}
              autoFocus={true}
              style={{
                width: `${query.length * 53}px`,
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "72pt",
                color: colors.LightMain,
                caretColor: colors.LightMain,
                backgroundColor: "rgba(0,0,0,0.0)",
                outline: "none",
                border: "none"
              }}
            />
            <span
              className="input-bracket pulse"
              role="button"
              tabIndex="0"
              onClick={resetQuery}
            >
              ]
            </span>
          </div>
          <div style={{ position: "fixed", top: "5px", right: "50px" }}>
            {logo}
          </div>
        </div>
        <div style={{ position: "fixed", bottom: "100px", left: "18vw" }}>
          This site is under some reconstruction at the moment. Hang tight;
          it'll look pretty cool when it's done!
        </div>
        {credits}
      </Fragment>
    );
  }
}

export default CLIPortfolio;
