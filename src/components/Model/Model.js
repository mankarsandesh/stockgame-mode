import React, { Component } from "react";

import "./Model.css";

import { render } from "@testing-library/react";
import {
  Fade,
  Box,
  Paper,
  Tabs,
  Tab,
  Modal,
  Backdrop,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

import GameRule from "components/pages/GameRule/GameRule";
import CurrentBet from "components/pages/CurrentBet/CurrentBet";
import StockList from "components/pages/StockList/StockList";
import Settings from "components/pages/Settings/Settings";
import BetHistory from "components/pages/BetHistory/BetHistory";

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
    console.log(props,"Props");
    super(props);
    this.state = { value: props.openTabValue, open: true  };
    console.log(this.state.value,"New state Props");
  }

//   handleChange(event,newValue) {
//     console.log(newValue);
//   }

  handleChange = (event, newValue) => {
    console.log(newValue);
    this.setState((state) => ({ 
        value: newValue 
    }));
  };

  // Close Open Model
  handleClose = (event) => {
    this.setState((state) => ({ 
        open: false 
    }));
  }
  // Open Model Page
  openModel = (event,value) => {
    this.setState((state) => ({ 
        open: true 
    }));
   
  }

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="header__model"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className="header__paper">
              <button onClick={this.handleClose} className="desktopModel__Close">
                <CloseIcon />
              </button>
              <Box className="header__AllPage">
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
              </Box>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default ModelView;
