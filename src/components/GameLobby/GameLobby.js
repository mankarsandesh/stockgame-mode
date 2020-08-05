import React from 'react'
import "./GameLobby.css";
import MoneyIcon from '@material-ui/icons/Money';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import one from "../../shared/images/chip/one.png";
import two from "../../shared/images/chip/two.png";
import three from "../../shared/images/chip/three.png";
import four from "../../shared/images/chip/four.png";
import five from "../../shared/images/chip/five.png";


function GameLobby() {


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
                        <div class="plate" id="plate">
                            <ul class="inner">
                                <li class="number"><label><input type="radio" name="pit" value="32" /><span class="pit">32</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="15" /><span class="pit">15</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="19" /><span class="pit">19</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="4" /><span class="pit">4</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="21" /><span class="pit">21</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="2" /><span class="pit">2</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="25" /><span class="pit">25</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="17" /><span class="pit">17</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="34" /><span class="pit">34</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="6" /><span class="pit">6</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="27" /><span class="pit">27</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="13" /><span class="pit">13</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="36" /><span class="pit">36</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="11" /><span class="pit">11</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="30" /><span class="pit">30</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="8" /><span class="pit">8</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="23" /><span class="pit">23</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="10" /><span class="pit">10</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="5" /><span class="pit">5</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="24" /><span class="pit">24</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="16" /><span class="pit">16</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="33" /><span class="pit">33</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="1" /><span class="pit">1</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="20" /><span class="pit">20</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="14" /><span class="pit">14</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="31" /><span class="pit">31</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="9" /><span class="pit">9</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="22" /><span class="pit">22</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="18" /><span class="pit">18</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="29" /><span class="pit">29</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="7" /><span class="pit">7</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="28" /><span class="pit">28</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="12" /><span class="pit">12</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="35" /><span class="pit">35</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="3" /><span class="pit">3</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="26" /><span class="pit">26</span></label></li>
                                <li class="number"><label><input type="radio" name="pit" value="0" /><span class="pit">0</span></label></li>
                            </ul>

                        </div>


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

export default GameLobby
