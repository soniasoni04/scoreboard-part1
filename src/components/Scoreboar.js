import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
  render() {
    return (
      <div>
        <h1>Scoreboard</h1>
        <ul>
          <Player  />
        </ul>
      </div>
    );
  }
}
