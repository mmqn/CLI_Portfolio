import React, { Component } from "react";
import "./styles/app.css";
import "./styles/animations.css";
import colors from "./utils/colors.json";
// import content from "./utils/data.json";
import generateData from "./utils/dataGen";
import ErrorBoundary from "./utils/ErrorBoundary";
import Content from "./Content";

class CLIPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      content: {
        CommandsList: {
          Title: "List of Commands",
          Description: "",
          Content: []
        }
      },
      currentContent: { Title: "", Description: "", Content: [""] },
      colors: { Primary: colors.LightMain, Secondary: colors.DarkMain },
      darkMode: false,
      mountContent: false,
      mountCommandsList: false
    };
    this.resetQuery = this.resetQuery.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
    this.toggleCommandsList = this.toggleCommandsList.bind(this);
    this.flipTheme = this.flipTheme.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/mmqn/96b6e5f897f8aa51531e4c97c35e5067/raw/289a460c31a9df462e92670a4238b49113449442/portfolio_data.json"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          content: json
        });
      });
  }

  resetQuery() {
    document.getElementById("input").focus();

    this.setState({
      query: ""
    });
  }

  updateQuery(ev) {
    this.setState({
      query: ev.target.value,
      mountContent: true
    });
  }

  handleCommand(ev) {
    const { key } = ev;
    const { query, content } = this.state;
    const { resetQuery, flipTheme } = this;

    if (key === "Escape") {
      resetQuery();
    } else if (query === "?") {
      this.setState({
        mountCommandsList: true
      });
    } else if (/hello/i.test(query) || /about/i.test(query)) {
      this.setState({
        currentContent: content.About
      });
    } else if (/skills/i.test(query)) {
      this.setState({
        currentContent: content.Skills
      });
    } else if (/experiences/i.test(query)) {
      this.setState({
        currentContent: content.Experience
      });
    } else if (/projects/i.test(query)) {
      this.setState({
        currentContent: content.Projects
      });
    } else if (/courses/i.test(query) || /classes/i.test(query)) {
      this.setState({
        currentContent: content.Courses
      });
    } else if (/flip/i.test(query)) {
      flipTheme();
    } else if (/datagen/i.test(query)) {
      generateData();
    } else {
      this.setState({
        currentContent: { Title: "", Description: "", Content: [""] }
      });
    }
  }

  toggleCommandsList() {
    this.setState(state => ({
      mountCommandsList: !state.mountCommandsList
    }));
  }

  flipTheme() {
    const { darkMode } = this.state;

    if (darkMode === false) {
      this.setState({
        colors: { Primary: colors.DarkMain, Secondary: colors.LightMain },
        darkMode: true
      });
    } else if (darkMode === true) {
      this.setState({
        colors: { Primary: colors.LightMain, Secondary: colors.DarkMain },
        darkMode: false
      });
    }
  }

  render() {
    const {
      query,
      content,
      currentContent,
      colors,
      darkMode,
      mountContent,
      mountCommandsList
    } = this.state;
    const {
      resetQuery,
      updateQuery,
      handleCommand,
      toggleCommandsList,
      flipTheme
    } = this;

    document.getElementById("body").style.backgroundColor = colors.Primary;

    const logo = (
      <svg
        id="logo"
        width="250"
        height="250"
        viewBox="0 0 1000 1000"
        onClick={flipTheme}
      >
        <title>keycap_logo</title>
        <path
          d="M454.93,803.41L45.4723,567.0093c-25.7578-14.8712-22.5275-40.8473,7.215-58.0191l391.89-226.2579C474.32,265.56,519.3118,263.6954,545.07,278.5666L954.5277,514.9674c25.7578,14.8712,22.5275,40.8473-7.215,58.0191l-391.89,226.2579C525.68,816.4163,480.6882,818.2813,454.93,803.41Z"
          style={{
            fill: colors.Secondary,
            stroke: colors.Primary,
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
            stroke: colors.Primary,
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
            stroke: colors.Primary,
            strokeMiterlimit: "10",
            strokeWidth: "16px"
          }}
        />
        <path
          d="M454.93,763.0647L45.4723,526.664c-25.7578-14.8712-22.5275-40.8473,7.215-58.0191l391.89-226.2579C474.32,225.215,519.3118,223.35,545.07,238.2213L954.5277,474.6221c25.7578,14.8712,22.5275,40.8473-7.215,58.0191l-391.89,226.2579C525.68,776.071,480.6882,777.936,454.93,763.0647Z"
          style={{
            fill: colors.Secondary,
            stroke: colors.Primary,
            strokeMiterlimit: "10",
            strokeWidth: "16px"
          }}
        />
        <path
          d="M370.85,528.4756l117.4048-67.7837-133.43,23.92-18.8505-10.8834,41.4273-77.0377L259.9971,464.4747,225.31,444.448,402.6674,342.0506,439.8707,363.53l-48.1341,88.74,154.21-27.4969,36.951,21.3337L405.5406,548.5042Z"
          style={{ fill: colors.Primary }}
        />
        <path
          d="M591.0852,524.388l-113.6576,65.62-34.6871-20.0266L620.098,467.5842l26.8967,15.5288L623.5941,604.016l116.1546-67.0619,34.6906,20.0286L597.3326,659.2354,569.1778,642.98Z"
          style={{ fill: colors.Primary }}
        />
        <line
          x1="257.0796"
          y1="560.3206"
          x2="396.6354"
          y2="640.8931"
          style={{
            fill: "none",
            stroke: colors.Primary,
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            strokeWidth: "14px"
          }}
        />
      </svg>
    );

    const credits = (
      <div
        id="credits"
        style={{
          color: colors.Secondary,
          backgroundColor: colors.Primary,
          borderTop: `1px solid ${colors.Secondary}`
        }}
      >
        Find me on [
        <a
          className={darkMode ? "dark-mode-link" : "light-mode-link"}
          href="https://github.com/mmqn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        ,&nbsp;
        <a
          className={darkMode ? "dark-mode-link" : "light-mode-link"}
          href="https://www.linkedin.com/in/michaelmqn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        ,&nbsp;
        <a
          className={darkMode ? "dark-mode-link" : "light-mode-link"}
          href="https://twitter.com/m_queue_n"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        ,&nbsp;
        <a
          className={darkMode ? "dark-mode-link" : "light-mode-link"}
          href="mailto:michaelmqn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        ] // Built using [
        <a
          className={darkMode ? "dark-mode-link" : "light-mode-link"}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>
        ,&nbsp;
        <a
          className={darkMode ? "dark-mode-link" : "light-mode-link"}
          href="http://www.colorbox.io/#steps=9#hue_start=230#hue_end=185#hue_curve=easeInQuad#sat_start=100#sat_end=5#sat_curve=linear#sat_rate=200#lum_start=12#lum_end=100#lum_curve=easeInQuad#lock_hex="
          target="_blank"
          rel="noopener noreferrer"
        >
          ColorBox
        </a>
        ,&nbsp;
        <a
          className={darkMode ? "dark-mode-link" : "light-mode-link"}
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

    // const cmdList = <div />;

    const cmdList = (
      <div
        id="cmd-list"
        className="no-select"
        onClick={toggleCommandsList}
        style={{
          bottom: mountCommandsList
            ? "0px"
            : content.CommandsList.Content.length * -20 + 4,
          height: content.CommandsList.Content.length * 20 + 22,
          backgroundColor: colors.Primary,
          borderColor: colors.Secondary
        }}
      >
        <p
          style={{
            margin: "4px",
            padding: "1px",
            fontWeight: "900",
            color: colors.Primary,
            backgroundColor: colors.Secondary
          }}
        >
          {content.CommandsList.Title}
        </p>
        {content.CommandsList.Content.map(command => (
          <p key={command} style={{ color: colors.Secondary }}>
            {command}
          </p>
        ))}
      </div>
    );

    return (
      <ErrorBoundary>
        <div
          id="top-panel"
          style={
            mountContent
              ? { backgroundColor: colors.Secondary, height: "140px" }
              : { backgroundColor: colors.Secondary, height: "240px" }
          }
        >
          <p
            id="name-title"
            style={{ color: colors.Primary }}
            role="button"
            tabIndex="0"
            onClick={() => window.location.reload()}
          >
            Michael M. Q. Nguyen
          </p>
          {!mountContent && (
            <p id="tagline" style={{ color: colors.Primary }}>
              I code designs & design code.
              <br />
              Your cursor is hot and ready to fire,
              <br />
              just go ahead and type ‘hello’!
            </p>
          )}
          <div style={{ margin: "-15px", whiteSpace: "nowrap" }}>
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
                width: `${query.length * 59}px`,
                fontFamily: "'Space Mono Italic', monospace",
                fontSize: "72pt",
                color: colors.Primary,
                caretColor: colors.Primary,
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
        </div>
        {mountContent && (
          <Content
            title={currentContent.Title}
            description={currentContent.Description}
            content={currentContent.Content}
            color={colors.Secondary}
          />
        )}
        {cmdList}
        {logo}
        {credits}
      </ErrorBoundary>
    );
  }
}

export default CLIPortfolio;
