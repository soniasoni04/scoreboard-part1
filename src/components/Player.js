import React, { Component } from "react";

export default class Player extends Component {
  render() {
    console.log("player details : ", this.props)

    return (
        <div>
        <p>
        <li>
        Player_ID : {this.props.id}, 
        Player_Name: {this.props.name}, 
        Player_Score: {this.props.score}
        </li>
            
        </p>
        </div>
    )
      

  }
}