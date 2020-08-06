import React from 'react'
import "./GameLobby.css";
import MoneyIcon from '@material-ui/icons/Money';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import one from "../../shared/images/chip/one.png";
import two from "../../shared/images/chip/two.png";
import three from "../../shared/images/chip/three.png";
import four from "../../shared/images/chip/four.png";
import five from "../../shared/images/chip/five.png";



class GameLobby extends React.Component {

    render() {
        return (


            <div className="gameLobby__wrapper">



                <div className="gameLobby__StockInfo">

                    <div className="stockInfo__game">
                        <span>Game Id : </span> 512124121212121212
                </div>
                    <div className="stockInfo__game">
                        <span>BET Id : </span> BDJBJBD1541545454J
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
                        <h2 className="gameLobby__stockName">select stock</h2>
                        <div className="gameLobby__StockSelect">

                            <Select
                                className="gameLobby__SelectedStockType"
                                value=" "
                            >
                                <MenuItem value=" ">Stock Type</MenuItem>
                                <MenuItem value={10}>BTC1</MenuItem>
                                <MenuItem value={20}>SHOOOO</MenuItem>
                                <MenuItem value={30}>SHOOOO32</MenuItem>
                            </Select>

                            <Select
                                className="gameLobby__SelectedStock"
                                value=" "
                            >
                                <MenuItem value=" ">Select Stock</MenuItem>
                                <MenuItem value={10}>BTC1</MenuItem>
                                <MenuItem value={20}>SHOOOO</MenuItem>
                                <MenuItem value={30}>SHOOOO32</MenuItem>
                            </Select>

                            <Select
                                className="gameLobby__SelectedStockTime"
                                value=" "
                            >
                                <MenuItem value=" ">Stock</MenuItem>
                                <MenuItem value={10}>BTC1</MenuItem>
                                <MenuItem value={20}>SHOOOO</MenuItem>
                                <MenuItem value={30}>SHOOOO32</MenuItem>
                            </Select>
                        </div>
                        <div className="gameLobby__lastDraw">
                            <h2>Lottery Draw</h2>
                            <h3>00.55</h3>
                        </div>
                    </div>
                    <div className="gameLobby__GameRule">

                        <div className="gameLobby__GameRuleCircle">




                        </div>
                    </div>
                    <div className="gameLobby__StockRule">

                        <button className="firstDigit">First Digit</button>
                        <button className="lastDigit">Last Digit</button>
                        <button className="bothDigit">Both Digit</button>
                        <button className="twoDigit">Two Digit</button>

                    </div>

                </div>

                <div className="gameLobby__Coins">

                    <div className="gameLobby__CoinsChips">
                        <img src={one} className="chips__Image" width="85" />
                        <div className="chipsAmount">100 </div >
                    </div>
                    <div className="gameLobby__CoinsChips">
                        <img src={two} className="chips__Image" width="85" />
                        <div className="chipsAmount">200 </div >
                    </div>
                    <div className="gameLobby__CoinsChips">
                        <img src={three} className="chips__Image" width="85" />
                        <div className="chipsAmount">500 </div >
                    </div>
                    <div className="gameLobby__CoinsChips">
                        <img src={four} className="chips__Image" width="85" />
                        <div className="chipsAmount">1000 </div >
                    </div>
                    <div className="gameLobby__CoinsChips">
                        <img src={five} className="chips__Image" width="85" />
                        <div className="chipsAmount">5000 </div >
                    </div>

                </div>


            </div>
        )
    }
}

export default GameLobby
