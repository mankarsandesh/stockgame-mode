import React, { Component } from "react";
import "./GameLobby.css";
import one from "shared/images/chip/one.png";
import two from "shared/images/chip/two.png";
import three from "shared/images/chip/three.png";
import four from "shared/images/chip/four.png";
import five from "shared/images/chip/five.png";

import Game from "components/Game/Game";

import SelectStock from "components/SelectStock/SelectStock";
import CurrentBet from "components/CurrentBet/CurrentBet";

class GameLobby extends Component {
  constructor(props) {
    super(props);
    this.state = { gameValue: "FirstDigit" };
  }

  handleChange(ruleName) {
    this.setState({
      gameValue: ruleName,
    });
  }

  render() {
    return (
      <div className="gameLobby__wrapper">
        {/* Show User Current Bet Details */}
        <CurrentBet />
        <div className="gameLobby__Betting">
          {/* User Select Stock */}
          <SelectStock />
          <div className="gameLobby__GameRule">
            <div className="gameLobby__GameRuleCircle">
              {/* Game Lobby  */}
              <Game gameRuleValue={this.state.gameValue} />
            </div>
          </div>
          <div className="gameLobby__StockRule">
            {this.state.gameValue}
            <span
              id="firstDigit"
              className={
                this.state.gameValue === "FirstDigit" ? " activeButton" : ""
              }
              onClick={() => this.handleChange("FirstDigit")}
            >
              First Digit
            </span>
            <span
              id="lastDigit"
              className={
                this.state.gameValue === "LastDigit" ? " activeButton" : ""
              }
              onClick={() => this.handleChange("LastDigit")}
            >
              Last Digit
            </span>
            <span
              id="bothDigit"
              className={
                this.state.gameValue === "BothDigit" ? " activeButton" : ""
              }
              onClick={() => this.handleChange("BothDigit")}
            >
              Both Digit
            </span>
            <span
              id="twoDigit"
              className={
                this.state.gameValue === "TwoDigit" ? " activeButton" : ""
              }
              onClick={() => this.handleChange("TwoDigit")}
            >
              Two Digit
            </span>
          </div>
        </div>

        <div className="gameLobby__Coins">
          <div className="gameLobby__CoinsChips">
            <img src={one} className="chips__Image" alt="Chips" width="85" />
            <div className="chipsAmount">100 </div>
          </div>
          <div className="gameLobby__CoinsChips">
            <img src={two} className="chips__Image" alt="Chips" width="85" />
            <div className="chipsAmount">200 </div>
          </div>
          <div className="gameLobby__CoinsChips">
            <img src={three} className="chips__Image" alt="Chips" width="85" />
            <div className="chipsAmount">500 </div>
          </div>
          <div className="gameLobby__CoinsChips">
            <img src={four} className="chips__Image" alt="Chips" width="85" />
            <div className="chipsAmount">1000 </div>
          </div>
          <div className="gameLobby__CoinsChips">
            <img src={five} className="chips__Image" alt="Chips" width="85" />
            <div className="chipsAmount">5000 </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameLobby;
