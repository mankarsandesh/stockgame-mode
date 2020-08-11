import React from "react";
import "./Header.css";
import DescriptionIcon from "@material-ui/icons/Description";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoneyIcon from "@material-ui/icons/Money";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import CloseIcon from "@material-ui/icons/Close";

import StockList from "components/pages/StockList/StockList";
import GameRule from "components/pages/GameRule/GameRule";
import BetHistory from "components/pages/BetHistory/BetHistory";
import CurrentBet from "components/pages/CurrentBet/CurrentBet";
import Settings from "components/pages/Settings/Settings";
import { Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
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

export default function Header() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  // Close Open Model
  const handleClose = () => {
    setOpen(false);
  };
  // Open Model Page
  function openModel(value) {
    setOpen(true);
    setValue(value);
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          alt="EC Game"
          src="http://ecglao.com/logo/logo.png"
        />
        <button onClick={() => openModel(0)}>
          {" "}
          <DescriptionIcon className="icon" /> Rule
        </button>
        <button>
          {" "}
          <FavoriteBorderIcon className="icon" /> LeaderBoard
        </button>
        <button onClick={() => openModel(1)}>
          <MoneyIcon className="icon" /> Current bet
        </button>
        <button onClick={() => openModel(3)}>
          {" "}
          <ShowChartIcon className="icon" /> Stock List
        </button>

        <Modal
          borderRadius={16}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="header__model"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className="header__paper">
              <button onClick={handleClose} className="desktopModel__Close">
                <CloseIcon />
              </button>
              <Box className="header__AllPage">
                <Paper borderRadius={16}>
                  <Tabs
                    className="header__AllPageTabs"
                    indicatorColor="black"
                    value={value}
                    onChange={handleChange}
                    centered
                    borderRadius={16}
                  >
                    <Tab label="Game Rule" />
                    <Tab label="Current Bet" />
                    <Tab label="Bet History" />
                    <Tab label="Stock List" />
                    <Tab label="setting" />
                  </Tabs>
                  <TabPanel
                    value={value}
                    index={0}
                    className="header__AllPageTabPanel"
                  >
                    {/* Game Rule Page */}
                    <GameRule />
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={1}
                    className="header__AllPageTabPanel"
                  >
                    {/* Users Current Bet History  */}
                    <CurrentBet />
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={2}
                    className="header__AllPageTabPanel"
                  >
                    {/* Users Bet History  */}
                    <BetHistory />
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={3}
                    className="header__AllPageTabPanel"
                  >
                    {/* Call Stock List Components */}
                    <StockList />
                  </TabPanel>
                  <TabPanel
                    value={value}
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
      <div className="header__leftCurve"></div>
      <div className="header__stock">
        <h2>
          USINDEX: <span> $9,03245 </span>
        </h2>
        <button>
          <TrendingDownIcon className="icon" /> Full Featured Chart
        </button>
      </div>
      <div className="header__icons">
        <Avatar
          alt="Sandesh Mankar"
          src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
        ></Avatar>

        <AttachMoneyIcon className="icon" />

        <div className="header__userAccount">
          <h2>Sandesh Mankar</h2>
          <p>10,000.00</p>
        </div>
        <ExpandMoreIcon className="icon" />
      </div>
    </div>
  );
}
