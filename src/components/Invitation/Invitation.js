import React from 'react';
import "./Invitation.css";

import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


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
            {value === index && (
                <Box p={1}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function Invitation() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="Invitation__wrapper">
            <PopupState variant="popover" popupId="demo-popup-popover"  >
                {(popupState) => (
                    <div>
                        <Button className="Invitation__button" {...bindTrigger(popupState)}>
                            <QuestionAnswerIcon className="icon" />{" "}
                        </Button>

                        <Popover

                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                        >
                            <Box className="Invitation__ChatBox">
                                <Paper  >
                                    <Tabs
                                        className="Invitation__ChatTabs"
                                        value={value}
                                        indicatorColor="primary"
                                        textColor="white"
                                        onChange={handleChange}

                                    >
                                        <Tab label="EC Game " />
                                        <Tab label="Game Channel" />
                                    </Tabs>
                                    <TabPanel value={value} index={0} className="Invitation__ChatTabPanel">
                                        <div className="Invitation__ChatMessage">
                                            <ListItem className="Invitation__UserInvitation" >
                                                <ListItemAvatar>
                                                    <Avatar

                                                        src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText className="userWinRate"> 95%</ListItemText>
                                                <ListItemText className="userFollower"> 150</ListItemText>
                                                <ListItemText className="userRank" > 100 </ListItemText>
                                                <ListItemText > <button className="Invitation__FollowBet">Follow Bet</button> </ListItemText>
                                            </ListItem>

                                            <ListItem className="Invitation__UserInvitation" >
                                                <ListItemAvatar>
                                                    <Avatar

                                                        src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText className="userWinRate"> 95%</ListItemText>
                                                <ListItemText className="userFollower"> 150</ListItemText>
                                                <ListItemText className="userRank" > 100 </ListItemText>
                                                <ListItemText > <button className="Invitation__FollowBet">Follow Bet</button> </ListItemText>
                                            </ListItem>
                                            <ListItem className="Invitation__UserInvitation" >
                                                <ListItemAvatar>
                                                    <Avatar

                                                        src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText className="userWinRate"> 95%</ListItemText>
                                                <ListItemText className="userFollower"> 150</ListItemText>
                                                <ListItemText className="userRank" > 100 </ListItemText>
                                                <ListItemText > <button className="Invitation__FollowBet">Follow Bet</button> </ListItemText>
                                            </ListItem>
                                            <ListItem className="Invitation__UserInvitation" >
                                                <ListItemAvatar>
                                                    <Avatar

                                                        src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText className="userWinRate"> 95%</ListItemText>
                                                <ListItemText className="userFollower"> 150</ListItemText>
                                                <ListItemText className="userRank" > 100 </ListItemText>
                                                <ListItemText > <button className="Invitation__FollowBet">Follow Bet</button> </ListItemText>
                                            </ListItem>
                                            <ListItem className="Invitation__UserInvitation" >
                                                <ListItemAvatar>
                                                    <Avatar

                                                        src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText className="userWinRate"> 95%</ListItemText>
                                                <ListItemText className="userFollower"> 150</ListItemText>
                                                <ListItemText className="userRank" > 100 </ListItemText>
                                                <ListItemText > <button className="Invitation__FollowBet">Follow Bet</button> </ListItemText>
                                            </ListItem>
                                            <ListItem className="Invitation__UserInvitation" >
                                                <ListItemAvatar>
                                                    <Avatar

                                                        src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText className="userWinRate"> 95%</ListItemText>
                                                <ListItemText className="userFollower"> 150</ListItemText>
                                                <ListItemText className="userRank" > 100 </ListItemText>
                                                <ListItemText > <button className="Invitation__FollowBet">Follow Bet</button> </ListItemText>
                                            </ListItem>
                                            <ListItem className="Invitation__UserInvitation" >
                                                <ListItemAvatar>
                                                    <Avatar

                                                        src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText className="userWinRate"> 95%</ListItemText>
                                                <ListItemText className="userFollower"> 150</ListItemText>
                                                <ListItemText className="userRank" > 100 </ListItemText>
                                                <ListItemText > <button className="Invitation__FollowBet">Follow Bet</button> </ListItemText>
                                            </ListItem>

                                        </div>
                                        <div className="Invitation__FooterSection">

                                            <Select
                                                className="Invitation__SelectData"
                                                value=" "
                                            >
                                                <MenuItem value=" ">Select </MenuItem>
                                                <MenuItem value={10}>Winning Rank</MenuItem>
                                                <MenuItem value={20}>Winning Rate</MenuItem>
                                                <MenuItem value={30}>Total Follower</MenuItem>
                                            </Select>

                                            <Button> Send Invitation</Button>
                                        </div>

                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        Game CHannel Chat
                                    </TabPanel>
                                </Paper>

                            </Box>
                        </Popover>
                    </div>
                )}
            </PopupState>
        </div>
    )
}


