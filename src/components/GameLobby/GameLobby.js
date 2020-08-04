import React from 'react'
import "./GameLobby.css";
import MoneyIcon from '@material-ui/icons/Money';

function GameLobby() {
    return (
        <div className="gameLobby__wrapper">
            
            <div className="gameLobby__StockInfo">

                <div className="stockInfo__game">
                    <span>Game Id : </span> BDJBJBDJ
                </div>
                <div className="stockInfo__game">
                    <span>BET Id : </span> BDJBJBDJ
                </div>
                <div className="stockInfo__game">
                    <span>BET : </span> FIG_BIG
                </div>
                <div className="stockInfo__game">
                    <span>Stock Name : </span> BIT12               
                </div>
                <div className="stockInfo__gameButton">
                    <button> <MoneyIcon /> &nbsp;View ALL</button>              
                </div>


            </div>
            <div className="gameLobby__Betting">

                <div className="gameLobby__SelectStock"> 
                    <div className="gameLobby__lastDraw">
                        <h2>Last Draw</h2>
                        <h3>2868.48</h3>
                    </div>
                    <h2 className="gameLobby__stockName">SELECT sTOCK</h2>
                    <div className="gameLobby__StockSelect">
                    <button>Select Stock</button> 
                    <button>BTC/USDT</button> 
                    <button> 1 MInute</button> 
                    </div>
                </div>
                <div className="gameLobby__GameRule"> 
                <h2>Game Rule</h2>
                </div>
                <div className="gameLobby__StockRule"> 
                <h2>Stock Game Rule</h2>
                </div>

            </div>

        </div>
    )
}

export default GameLobby
