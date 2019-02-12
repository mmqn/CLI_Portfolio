import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // log error messages to an error reporting service (none set atm)
  }

  render() {
    if (this.state.errorInfo) {
      // error path
      return (
        <div>
          <h3>
            Oh dear, looks like something went wrong{" "}
            <span role="img" aria-label="gasp">
              😦
            </span>
          </h3>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
