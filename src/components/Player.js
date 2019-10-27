import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <li>
        <p>{this.props.name}</p>
      </li>
    );
  }
}