import React, { Component } from "react";

export default class Player extends Component {
    state = {
        players: [
          { id: 1, name: "Kelley", score: 11 },
          { id: 2, name: "David", score: 14 },
          { id: 3, name: "Rein", score: 4 }
        ]
      };

  render() {
      const {players} = this.state
      console.log(players)

    return (
      <ol>
      {
          players.map(player => {
            return <li>
                        <p> <b> Player Id </b>: {player.id}</p>
                        <p> <b> Player Name</b> : {player.name}</p>
                        <p> <b>Player Score</b> : {player.score}</p>
                    </li>

          })
      }
      </ol>
    );
  }
}