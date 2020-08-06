import React from "react";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";


import Button from '@material-ui/core/Button';


import "./Footer.css";

import Invitation from "../Invitation/Invitation";

export default function Footer() {



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
        <Button>
          <VolumeMuteIcon className="icon" />{" "}
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


