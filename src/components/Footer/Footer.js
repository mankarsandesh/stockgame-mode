import React from "react";
import Container from "@material-ui/core/Container";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import "./Footer.css";

function Footer() {
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
        <button>
          <VolumeMuteIcon className="icon" />{" "}
        </button>

        <button>
          <NotificationsIcon className="icon" />{" "}
        </button>

        <button>
          <HelpOutlineIcon className="icon" />{" "}
        </button>

        <button>
          <FullscreenIcon className="icon" />{" "}
        </button>

        <button>
          <QuestionAnswerIcon className="icon" />{" "}
        </button>
      </div>
    </div>
  );
}

export default Footer;
