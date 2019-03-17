import React, { Component, Fragment } from "react";
import "./styles/App.css";
import Tooltip from "./Tooltip";
import Output from "./Output";
import resultSet from "./resources/resultSet";

class CLIPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: { Title: '', Content: [''] },
      uiColors: {
        BaseColor: "#00051f",
        AlternateBaseColor: "#000e4a",
        ContentColor: "#e5fdff",
        AlternateContentColor: "#a5e6f9"
      },
      columnColors: ["#001b79", "#002da4", "#0047c6", "#2a7fde"],
      mountCommandsList: false,
      mountFlipPrompt: false,
      mountTooltip: false,
      tooltipCoordinates: [0, 0],
      tooltipText: ""
    };
    this.resetQuery = this.resetQuery.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
    this.flipUI = this.flipUI.bind(this);
    this.handleTooltip = this.handleTooltip.bind(this);
  }

  shouldComponentUpdate(nextState) {
    if (
      nextState.query !== this.state.query ||
      nextState.uiColors.BaseColor !== this.state.uiColors.BaseColor ||
      nextState.mountCommandsList !== this.state.mountCommandsList ||
      nextState.mountFlipPrompt !== this.state.mountFlipPrompt ||
      nextState.mountTooltip !== this.state.mountTooltip
    ) {
      return true;
    }
    return false;
  }

  resetQuery() {
    document.getElementById("input").focus();

    this.setState({
      query: "",
      mountFlipPrompt: false,
      mountTooltip: false
    });
  }

  setQuery(ev) {
    const { target } = ev;

    this.setState({
      query: target.value
    });
  }

  handleCommand(ev) {
    const { key } = ev;
    const { query } = this.state;
    const { resetQuery } = this;

    // clear query and result is esc key is pressed
    if (key === "Escape") {
      resetQuery();
    } else if (query === "?") {
      this.setState({
        mountCommandsList: true
      });
    } else if (/hello/i.test(query) || /about/i.test(query)) {
      this.setState({
        result: resultSet.about
      });
    } else if (/skills/i.test(query)) {
      this.setState({
        result: resultSet.skills
      });
    } else if (/experience/i.test(query)) {
      this.setState({
        result: resultSet.experience
      });
    } else if (/projects/i.test(query)) {
      this.setState({
        result: resultSet.projects
      });
    } else if (/classes/i.test(query)) {
      this.setState({
        result: resultSet.classes
      });
    } else if (/flip/i.test(query)) {
      this.setState({
        mountFlipPrompt: true
      });
    } else {
      this.setState({
        result: { Title: '', Content: [''] }
      });
    }
  }

  flipUI() {
    const { uiColors } = this.state;
    const { resetQuery } = this;

    const darkUIColors = {
      BaseColor: "#00051f",
      AlternateBaseColor: "#000e4a",
      ContentColor: "#e5fdff",
      AlternateContentColor: "#a5e6f9"
    };
    const lightUIColors = {
      BaseColor: "#e5fdff",
      AlternateBaseColor: "#a5e6f9",
      ContentColor: "#00051f",
      AlternateContentColor: "#000e4a"
    };
    const darkcolumnColors = ["#001b79", "#002da4", "#0047c6", "#2a7fde"];
    const lightcolumnColors = ["#65baee", "#2a7fde", "#0047c6", "#002da4"];

    if (uiColors.BaseColor === "#00051f") {
      this.setState({
        uiColors: lightUIColors,
        columnColors: lightcolumnColors,
        mountTooltip: false
      });
    } else if (uiColors.BaseColor === "#e5fdff") {
      this.setState({
        uiColors: darkUIColors,
        columnColors: darkcolumnColors,
        mountTooltip: false
      });
    }

    resetQuery();
  }

  /**
   * Handles tooltip mounting and unmounting.
   * @param {Boolean} mountTooltip: `true` mounts and `false` unmounts tooltip.
   * @param {Synthetic Event} ev: Synthetic event used to retrieve mouse position.
   * @param {String} tooltipText: Text to be rendered by <Tooltip>.
   */
  handleTooltip(mountTooltip, ev, tooltipText = "", position = "bottom") {
    const tooltipCoordinates = [];

    if (ev) {
      const el = ev.target.getBoundingClientRect();
      const x = el.left;
      let y = el.bottom + 8;
      if (position === "top") {
        const heightMultiplier = el.height * 2.2;
        y = el.bottom - heightMultiplier;
      }
      tooltipCoordinates.push(x);
      tooltipCoordinates.push(y);
    }

    this.setState({
      mountTooltip,
      tooltipCoordinates,
      tooltipText
    });
  }

  render() {
    const {
      uiColors,
      columnColors,
      query,
      result,
      mountCommandsList,
      mountFlipPrompt,
      mountTooltip,
      tooltipCoordinates,
      tooltipText
    } = this.state;
    const { resetQuery, setQuery, handleCommand, flipUI, handleTooltip } = this;

    const columnDivs = (
      <Fragment>
        <div
          className="ColumnDiv"
          style={{ backgroundColor: columnColors[0] }}
        />
        <div
          className="ColumnDiv"
          style={{ backgroundColor: columnColors[1] }}
        />
        <div
          className="ColumnDiv"
          style={{ backgroundColor: columnColors[2] }}
        />
        <div
          className="ColumnDiv"
          style={{ backgroundColor: columnColors[3] }}
        />
      </Fragment>
    );
    const logo = (
      <div
        id="logo"
        role="button"
        tabIndex="0"
        onClick={() => window.location.reload()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 800 800"
        >
          <path
            fill={uiColors.ContentColor}
            d="M171.485,591.0658l-43.511,7.6722V297.1933L163.3,290.9644l99.51,128.9187,99.51-164.0113,34.4641-6.0769V551.3395l-43.0786,7.5959V346.5627l-78.8339,131.072-24.5554,4.33L171.485,378.6931V591.0658Z"
          />
          <path
            fill={uiColors.ContentColor}
            d="M448.4479,542.23V240.2528l33.5965-5.4916,146.9,186.47V208.8586l43.0816-7.5964V502.8068l-34.4641,6.0769L491.953,323.9094V534.5586Z"
          />
          <path
            fill={uiColors.ContentColor}
            d="M39.3923,134.1157C17.7265,137.9359,0,159.0616,0,181.0616V760c0,22,17.7265,36.8743,39.3923,33.0541l721.2156-127.17C782.2737,662.0641,800,640.9385,800,618.9385V40c0-22-17.7265-36.8743-39.3923-33.0541Zm713.86,453.8052c0,22-17.7265,43.1257-39.3923,46.9459L86.1406,745.55c-21.6658,3.82-39.3923-11.0541-39.3923-33.0541V214.8108c0-22,17.7265-43.1257,39.3923-46.9459L713.86,57.181c21.6658-3.82,39.3923,11.0541,39.3923,33.0541V587.9208Z"
          />
        </svg>
      </div>
    );
    const commandsList = (
      <div id="commands-list">
        <p
          key="title"
          className="Heading Underlined"
          style={{
            marginTop: "40px",
            color: uiColors.ContentColor
          }}
          role="button"
          tabIndex="0"
          onClick={() =>
            this.setState({
              mountCommandsList: false,
              mountTooltip: false
            })
          }
          onMouseEnter={ev =>
            handleTooltip(true, ev, "click to hide list", "top")
          }
          onMouseLeave={() => handleTooltip(false)}
        >
          {resultSet.commandsList.Title}
        </p>
        {resultSet.commandsList.Content.map((item, index) => {
          return (
            <p
              key={`cmdls-${index}`}
              className="Output"
              style={{ color: uiColors.ContentColor }}
            >
              {item.Content}
            </p>
          );
        })}
      </div>
    );
    const linkStyle =
      uiColors.BaseColor === "#00051f" ? "LightLink" : "DarkLink";
    const credits = (
      <div id="credits" style={{ color: uiColors.ContentColor }}>
        Find me on&nbsp;[
        <a
          className={linkStyle}
          href="https://github.com/mmqn"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={ev => handleTooltip(true, ev, "opens new tab", "top")}
          onMouseLeave={() => handleTooltip(false)}
        >
          GitHub
        </a>
        ,&nbsp;
        <a
          className={linkStyle}
          href="https://www.linkedin.com/in/michaelmqn/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={ev => handleTooltip(true, ev, "opens new tab", "top")}
          onMouseLeave={() => handleTooltip(false)}
        >
          LinkedIn
        </a>
        ,&nbsp;
        <a
          className={linkStyle}
          href="https://twitter.com/m_queue_n"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={ev => handleTooltip(true, ev, "🌦", "top")}
          onMouseLeave={() => handleTooltip(false)}
        >
          Twitter
        </a>
        ,&nbsp;
        <a
          className={linkStyle}
          href="mailto:michaelmqn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={ev =>
            handleTooltip(true, ev, "opens your email client", "top")
          }
          onMouseLeave={() => handleTooltip(false)}
        >
          Email
        </a>
        ]&nbsp;// Built using&nbsp;[
        <a
          className={linkStyle}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={ev => handleTooltip(true, ev, "opens new tab", "top")}
          onMouseLeave={() => handleTooltip(false)}
        >
          React.js
        </a>
        ,&nbsp;
        <a
          className={linkStyle}
          href="http://www.colorbox.io/#steps=9#hue_start=230#hue_end=185#hue_curve=easeInQuad#sat_start=100#sat_end=5#sat_curve=linear#sat_rate=200#lum_start=12#lum_end=100#lum_curve=easeInQuad#lock_hex="
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={ev => handleTooltip(true, ev, "opens new tab", "top")}
          onMouseLeave={() => handleTooltip(false)}
        >
          ColorBox
        </a>
        ,&nbsp;
        <a
          className={linkStyle}
          href="https://www.youtube.com/watch?v=HEXWRTEbj1I"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={ev => handleTooltip(true, ev, "what is this?", "top")}
          onMouseLeave={() => handleTooltip(false)}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </a>
        ]
      </div>
    );

    document.getElementsByTagName("body")[0].bgColor = uiColors.BaseColor;

    return (
      <div>
        {mountTooltip && (
          <Tooltip
            text={tooltipText}
            coordinates={tooltipCoordinates}
            // `colors` prop format: [background color, text color]
            colors={[uiColors.AlternateContentColor, uiColors.BaseColor]}
          />
        )}
        <div id="left-panel">
          <div>
            <p
              className="Heading Underlined NoSelect"
              style={{
                marginTop: "40px",
                color: uiColors.ContentColor,
                textDecorationColor: uiColors.ContentColor
              }}
              role="button"
              tabIndex="0"
              onClick={() => window.location.reload()}
              onMouseEnter={ev => handleTooltip(true, ev, "reload page")}
              onMouseLeave={() => handleTooltip(false)}
            >
              Michael M. Q. Nguyen
            </p>
          </div>
          <div>
            <p className="Tagline" style={{ color: uiColors.ContentColor }}>
              I code designs & design code.
            </p>
            <p className="Tagline" style={{ color: uiColors.ContentColor }}>
              Your cursor is hot and ready to fire,
            </p>
            <p className="Tagline" style={{ color: uiColors.ContentColor }}>
              just go ahead and type 'hello'!
            </p>
          </div>
          <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <span
              className="CmdLine Pulse"
              style={{ marginLeft: "-20px", color: uiColors.ContentColor }}
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
              onChange={setQuery}
              // runs command logic on key up
              onKeyUp={handleCommand}
              autoFocus={true}
              style={{
                width: `${query.length * 68}px`,
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "92pt",
                color: uiColors.ContentColor,
                caretColor: uiColors.ContentColor,
                backgroundColor: "rgba(0,0,0,0.0)",
                outline: "none",
                border: "none"
              }}
            />
            <span
              className="CmdLine Pulse"
              style={{ color: uiColors.ContentColor }}
              role="button"
              tabIndex="0"
              onClick={resetQuery}
            >
              ]
            </span>
          </div>
          {mountFlipPrompt && (
            <div id="flip-UI-prompt">
              <p
                className="GuideText"
                style={{ color: uiColors.ContentColor, paddingBottom: "6px" }}
              >
                Flip UI Mode?
              </p>
              <p
                className="Tagline Underlined NoSelect HoverPulse"
                style={{ color: uiColors.ContentColor, marginTop: "5px" }}
                role="button"
                tabIndex="0"
                onClick={flipUI}
                onMouseEnter={ev =>
                  handleTooltip(
                    true,
                    ev,
                    uiColors.BaseColor === "#00051f"
                      ? "let there be light ☀️"
                      : "join the dark side 🌒"
                  )
                }
                onMouseLeave={() => handleTooltip(false)}
              >
                Sure
              </p>
              <p
                className="Tagline Underlined NoSelect HoverPulse"
                style={{ color: uiColors.ContentColor, marginTop: "10px" }}
                role="button"
                tabIndex="0"
                onClick={resetQuery}
                onMouseEnter={ev =>
                  handleTooltip(true, ev, "it's okay to be indecisive")
                }
                onMouseLeave={() => handleTooltip(false)}
              >
                Nevermind
              </p>
            </div>
          )}
          {mountCommandsList || (
            <div style={{ marginTop: "30px" }}>
              <p className="GuideText" style={{ color: uiColors.ContentColor }}>
                type '?' for full list of commands
              </p>
              <p className="GuideText" style={{ color: uiColors.ContentColor }}>
                press 'esc' to quickly reset query
              </p>
            </div>
          )}
          {mountCommandsList && commandsList}
        </div>
        {credits}
        <div
          id="right-panel"
          style={{ backgroundColor: uiColors.AlternateBaseColor }}
        >
          <Output result={result} contentColor={uiColors.ContentColor} />
        </div>
        {columnDivs}
        {logo}
      </div>
    );
  }
}

export default CLIPortfolio;
