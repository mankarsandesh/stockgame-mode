import React, { Component } from "react";
import "./Footer.css";

import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";

import Invitation from "components/Invitation/Invitation";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      showMe: true,
    };
  }
  operation() {
    this.setState({ showMe: !this.state.showMe });
  }

  render() {
    return (
      <div className="footerRow__Main">
        <div className="footerRow__StockList">
          <div className="footerRow__StockListName">Stock List</div>
          <div className="footerRow__StockName">
            <div className="stockName__name">BTC1</div>
            <div className="stockName__price">9080.94</div>
            <div className="stockName__status">CLOSED</div>
          </div>
          <div className="footerRow__StockName">
            <div className="stockName__name">BTC1</div>
            <div className="stockName__price">9080.94</div>
            <div className="stockName__status">CLOSED</div>
          </div>
          <div className="footerRow__StockName">
            <div className="stockName__name">BTC1</div>
            <div className="stockName__price">9080.94</div>
            <div className="stockName__status">CLOSED</div>
          </div>
          <div className="footerRow__StockName">
            <div className="stockName__name">BTC1</div>
            <div className="stockName__price">9080.94</div>
            <div className="stockName__status">CLOSED</div>
          </div>
          <div className="footerRow__StockName">
            <div className="stockName__name">BTC1</div>
            <div className="stockName__price">9080.94</div>
            <div className="stockName__status">CLOSED</div>
          </div>
          <div className="footerRow__StockName">
            <div className="stockName__name">BTC1</div>
            <div className="stockName__price">9080.94</div>
            <div className="stockName__status">CLOSED</div>
          </div>
        </div>
        <div className="footer__leftCurve"></div>
        <div className="footerRow__leftSide">
          <div className="footerRow__leftSideBet">
            <span>Current Bet : </span>
            <span className="currentBetAmount">
              <MonetizationOnIcon className="icon" /> 10,000.00
            </span>
          </div>
          <Button onClick={() => this.operation()}>
            {this.state.showMe ? (
              <VolumeDownIcon className="icon" />
            ) : (
              <VolumeOffIcon className="icon" />
            )}
          </Button>

          <Button>
            <NotificationsIcon className="icon" />{" "}
          </Button>

          <Button>
            <HelpOutlineIcon className="icon" />{" "}
          </Button>

          <Button>
            <FullscreenIcon className="icon" />{" "}
          </Button>

          {/* User Invitation Request to Other Users */}
          <Invitation />
        </div>
      </div>
    );
  }
}

export default Footer;
