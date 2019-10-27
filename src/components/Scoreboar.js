import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {

  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 10 },
      { id: 3, name: "Rein", score: 12 }
    ]
  }; 

  CallPlayerFun=(player)=>{
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        incrementScore={this.incrementScore}
      />
    )
  }

  incrementScore=(id)=>{
    this.setState({
      players: this.state.players.map(player => (
        player.id === id
          ? { ...player, score: player.score + 1 }
          : player
      ))
    });
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
