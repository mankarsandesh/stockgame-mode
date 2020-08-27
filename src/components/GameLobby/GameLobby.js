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

const gameAmountList = [
  { image: "one", amount: 100 },
  { image: "two", amount: 200 },
  { image: "three", amount: 500 },
  { image: "four", amount: 1000 },
  { image: "five", amount: 5000 },
];
class GameLobby extends Component {
  constructor(props) {
    super(props);
    this.state = { mount:true, gameValue: "FirstDigit", gameAmount: 100 };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(ruleName) {
    this.setState({
      gameValue: ruleName,
    });  
  }

  handleAmount(amount) {
    this.setState({
      gameAmount: amount,
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
              <Game gameRuleValue={this.state.gameValue} gameAmount={this.state.gameAmount} />
            </div>
          </div>
          <div className="gameLobby__StockRule">          
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
          <div
            className="gameLobby__CoinsChips"
            onClick={() => this.handleAmount(100)}
          >
            <img
              src={one}
              id="chips__Image"
              className={this.state.gameAmount === 100 ? "chipsActive" : ""}
              alt="Chips"
              width="85"
            />
            <div className="chipsAmount">100 </div>
          </div>
          <div
            className="gameLobby__CoinsChips"
            onClick={() => this.handleAmount(200)}
          >
            <img
              src={two}
              id="chips__Image"
              className={this.state.gameAmount === 200 ? "chipsActive" : ""}
              alt="Chips"
              width="85"
            />
            <div className="chipsAmount">200 </div>
          </div>
          <div
            className="gameLobby__CoinsChips"
            onClick={() => this.handleAmount(500)}
          >
            <img
              src={three}
              id="chips__Image"
              className={this.state.gameAmount === 500 ? "chipsActive" : ""}
              alt="Chips"
              width="85"
            />
            <div className="chipsAmount">500 </div>
          </div>
          <div
            className="gameLobby__CoinsChips"
            onClick={() => this.handleAmount(1000)}
          >
            <img
              src={four}
              id="chips__Image"
              className={this.state.gameAmount === 1000 ? "chipsActive" : ""}
              alt="Chips"
              width="85"
            />
            <div className="chipsAmount">1000 </div>
          </div>
          <div
            className="gameLobby__CoinsChips"
            onClick={() => this.handleAmount(5000)}
          >
            <img
              src={five}
              id="chips__Image"
              className={this.state.gameAmount === 5000 ? "chipsActive" : ""}
              alt="Chips"
              width="85"
            />
            <div className="chipsAmount">5000 </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameLobby;
