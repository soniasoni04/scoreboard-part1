import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {

  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 40 }
    ]
  }; 

  CallPlayerFun=(player)=>{
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
      />
    )
  }

  render() {
    return (
      <div>
        <h1>Scoreboard</h1>
          {this.state.players.sort((a, b) => b.score - a.score).map(this.CallPlayerFun)}
      </div>
    );
  }
}
