import React, { useState } from 'react';
import './Header.css';
import DescriptionIcon from '@material-ui/icons/Description';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoneyIcon from '@material-ui/icons/Money';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';


import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">

            <div className="header__left">
                <img className="header__logo"
                    src="http://ecglao.com/logo/logo.png" />
                <button> <DescriptionIcon className="icon" /> Rule</button>
                <button> <FavoriteBorderIcon className="icon" /> leaderboard</button>
                <button> <MoneyIcon className="icon" /> Current bet</button>
                <button> <ShowChartIcon className="icon" /> Stock List</button>
            </div>
            <div className="header__leftCurve">                
            </div>
            <div className="header__stock">
                <h2>USINDEX: <span> $9,03245 </span></h2>
                <button><TrendingDownIcon className="icon" /> Full Featured Chart</button>
            </div>
            <div className="header__icons">

                <Avatar alt="Sandesh Mankar" src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"></Avatar>

                <AttachMoneyIcon className="icon" />

                <div className="header__userAccount">
                    <h2>Sandesh Mankar</h2>
                    <p>10,000.00</p>
                </div>
              <ExpandMoreIcon className="icon" />      

            </div>

        </div>
    )
}
export default Header