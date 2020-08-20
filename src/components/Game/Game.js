import React, { Component } from "react";
import "./Game.css";
class Game extends Component {
  render() {
    return (
      <div>
        x
        <div class="wheel">
          <div>
            <span>Big</span>
          </div>
          <div>
            <span>SMALL</span>
          </div>
          <div>
            <span>TIE</span>
          </div>
          <div>
            <span>ODD</span>
          </div>
          <div>
            <span>EVEN</span>
          </div>
          <div>
            <span>High</span>
          </div>
          <div>
            <span>MID</span>
          </div>
          <div>
            <span>LOW</span>
          </div>
          <div className="lastDiv">
            <span>0-99</span>
          </div>

          <span class="centre">
            <span>
              <h4>Bet Close IN </h4>
              <h1>04:45</h1>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Game;
