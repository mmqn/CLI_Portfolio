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
      mountSubheading: true,
      mountCommandsList: false
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
    const { query, mountSubheading, mountCommandsList } = this.state;
    const { resetQuery, updateQuery, handleCommand } = this;

    document.getElementsByTagName("body")[0].bgColor = colors.LightMain;

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
        </div>
        <div style={{ position: 'fixed', bottom: '100px', left: '18vw' }}>
          This site is under some reconstruction at the moment. Hang tight; it'll look pretty
          cool when it's done!
        </div>
      </Fragment>
    );
  }
}

export default CLIPortfolio;
