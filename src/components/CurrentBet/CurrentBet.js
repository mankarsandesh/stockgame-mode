import React, { Component } from "react";
import MoneyIcon from "@material-ui/icons/Money";

class CurrentBet extends Component {
  render() {
    return (
      <div className="gameLobby__StockInfo">
        <div className="stockInfo__game">
          <span>Game Id : </span>
        </div>
        <div className="stockInfo__game">
          <span>BET Id : </span>
        </div>
        <div className="stockInfo__game">
          <span>BET : </span>
        </div>
        <div className="stockInfo__game">
          <span>Stock Name : </span>
        </div>
        <div className="stockInfo__gameButton">
          <button>
            <MoneyIcon /> View ALL
          </button>
        </div>
      </div>
    );
  }
}

export default CurrentBet;
