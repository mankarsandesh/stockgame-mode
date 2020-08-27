import React, { Component } from "react";
import { Select, MenuItem } from "@material-ui/core";

class SelectStock extends Component {
  render() {
    return (
      <div className="gameLobby__SelectStock">
        <div className="gameLobby__lastDraw">
          <h2>Last Draw</h2>
          <h3>2868.48</h3>
        </div>
        <h2 className="gameLobby__stockName">select stock</h2>
        <div className="gameLobby__StockSelect">
          <Select className="gameLobby__SelectedStockType" value=" ">
            <MenuItem value=" ">Stock Type</MenuItem>
            <MenuItem value={10}>BTC1</MenuItem>
            <MenuItem value={20}>SHOOOO</MenuItem>
            <MenuItem value={30}>SHOOOO32</MenuItem>
          </Select>

          <Select className="gameLobby__SelectedStock" value=" ">
            <MenuItem value=" ">Select Stock</MenuItem>
            <MenuItem value={10}>BTC1</MenuItem>
            <MenuItem value={20}>SHOOOO</MenuItem>
            <MenuItem value={30}>SHOOOO32</MenuItem>
          </Select>

          <Select className="gameLobby__SelectedStockTime" value=" ">
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
    );
  }
}

export default SelectStock;
