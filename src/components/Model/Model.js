import React, { Component } from "react";

import "./Model.css";


import {
  Box,
  Paper,
  Tabs,
  Tab,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

import GameRule from "components/pages/GameRule/GameRule";
import CurrentBet from "components/pages/CurrentBet/CurrentBet";
import StockList from "components/pages/StockList/StockList";
import Settings from "components/pages/Settings/Settings";
import BetHistory from "components/pages/BetHistory/BetHistory";
import Leaderboard from "components/pages/Leaderboard/Leaderboard";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

class ModelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.openTabValue, open: true , pageName : props.pageName };
    console.log(props.pageName,"Page Name");
  }

  handleChange = (event, newValue) => {
    this.setState((state) => ({
      value: newValue,
    }));
  };

  render() {
    return (

      <Box className="header__AllPage">
        { 
        this.state.pageName == "menuLeaderboard"  ? 
        <Paper>
       
          <Leaderboard/>
          </Paper>
        :
        <Paper>
          <Tabs
            className="header__AllPageTabs"
            value={this.state.value}
            onChange={this.handleChange}
            centered
          >
            <Tab label="Game Rule" />
            <Tab label="Current Bet" />
            <Tab label="Bet History" />
            <Tab label="Stock List" />
            <Tab label="setting" />
          </Tabs>
          <TabPanel
            value={this.state.value}
            index={0}
            className="header__AllPageTabPanel"
          >
            {/* Game Rule Page */}
            <GameRule />
          </TabPanel>
          <TabPanel
            value={this.state.value}
            index={1}
            className="header__AllPageTabPanel"
          >
            {/* Users Current Bet History  */}
            <CurrentBet />
          </TabPanel>
          <TabPanel
            value={this.state.value}
            index={2}
            className="header__AllPageTabPanel"
          >
            {/* Users Bet History  */}
            <BetHistory />
          </TabPanel>
          <TabPanel
            value={this.state.value}
            index={3}
            className="header__AllPageTabPanel"
          >
            {/* Call Stock List Components */}
            <StockList />
          </TabPanel>
          <TabPanel
            value={this.state.value}
            index={4}
            className="header__AllPageTabPanel"
          >
            <Settings />
          </TabPanel>
        </Paper>
  }
      </Box>
    );
  }
}

export default ModelView;
