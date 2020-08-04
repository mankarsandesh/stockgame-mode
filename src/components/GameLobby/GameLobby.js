import React from 'react'
import "./GameLobby.css";
function GameLobby() {
    return (
        <div className="gameLobby__wrapper">
            
            <div className="gameLobby__StockInfo">
                <h2>Stock info</h2>
            </div>
            <div className="gameLobby__Betting">

                <div className="gameLobby__SelectStock"> 
                <h2>Select info</h2>
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
