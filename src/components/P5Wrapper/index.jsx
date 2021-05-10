import React, { Component } from "react";

import sketch1 from "./sketch1";

export default class P5Wrapper extends Component {
  componentDidMount() {
    this.canvas1 = new window.p5(sketch1, this.props.p5Props.canvasId);
    this.canvas1.props = this.props.p5Props;
    this.canvas1.onSetAppState = this.props.onSetAppState;
  }

  shouldComponentUpdate(nextProps) {
    this.canvas1.props = nextProps.p5Props;
    return false;
  }

  componentWillUnmount() {
    this.canvas1.remove();
  }

  render() {
    return (
      <div
        id={this.props.p5Props.canvasId}
        style={{ width: "100%", textAlign: "center" }}
      />
    );
  }
}
