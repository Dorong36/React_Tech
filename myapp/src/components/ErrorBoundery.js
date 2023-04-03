import React, { Component } from "react";

class ErrorBoundery extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>Error is occered</div>;
    return this.props.children;
  }
}

export default ErrorBoundery;
