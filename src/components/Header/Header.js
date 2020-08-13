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
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";

import ModelView from "components/Model/Model";
import { Button } from "@material-ui/core";
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
  const [pageName, setPageName] = React.useState("menuPage");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (value,pageName) => {
    setOpen(true);
    setValue(value);
    setPageName(pageName);
    console.log(pageName,'pageName');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          alt="EC Game"
          src="http://ecglao.com/logo/logo.png"
        />
        <button onClick={() => handleOpen(0,'menuPage')}>
          <DescriptionIcon className="icon" /> Rule
        </button>
        <button onClick={() => handleOpen(1,'menuLeaderboard')}>
          <FavoriteBorderIcon className="icon" /> LeaderBoard
        </button>
        <button onClick={() => handleOpen(1,'menuPage')}>
          <MoneyIcon className="icon" /> Current bet
        </button>
        <button onClick={() => handleOpen(3,'menuPage')}>
          <ShowChartIcon className="icon" /> Stock List
        </button>
      </div>
      <div className="header__leftCurve"></div>
      <div className="header__stock">
        <h2>
          USINDEX: <span> $9,03245 </span>
        </h2>
        <button onClick={() => handleOpen(3,'menuChart')}>
          <TrendingDownIcon className="icon" /> Full Featured Chart
        </button>
      </div>
      <div className="header__icons" >
        <Button onClick={() => handleOpen(0,'menuProfile')}>
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
        </Button>
      
      </div>

      <Modal
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
        <div className="header__paper">
          <button onClick={handleClose} className="desktopModel__Close">
            <CloseIcon />
          </button>
          <ModelView openTabValue={value} pageName={pageName} />
        </div>
      </Modal>
    </div>
  );
}
