import React from "react";
import {
  makeStyles,
  createStyles,
  Paper,
  Button,
} from "@material-ui/core";
import userLogo from "shared/images/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.6em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 10px 0 6px #e7be4e",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#a72b2b ",
        outline: "1px solid #e7be4e",
        borderRadius: "10px",
      },
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      overflowY: "hidden",
      overflowX: "scroll",
      textAlign: "center",
      height: "320px",
      justifyItems: "center",
    },
    followButton: {
      borderRadius: "30px",
      padding: "4px 10px",
      border: "3px solid #e7be4e",
      color: "#e7be4e",
      backgroundColor: "#982229",
      fontWeight: "800",
      fontSize: "10px",
      marginTop: "15px",
    },
    unFollowButton: {
      borderRadius: "30px",
      padding: "4px 10px",
      border: "3px solid #FFF",
      color: "#FFF",
      backgroundColor: "#333",
      fontWeight: "800",
      fontSize: "10px",
      marginTop: "15px",
    },
    accountName: {
      color: "#e7be4e",
      fontSize: "18px",
      marginTop: "15px",
    },
    userProfileImage: {
      borderRadius: "50%",
      border: "2px solid #FFF",
      width: "100px",
    },
    userListCard: {
      margin: "0px 10px",
      height: "220px",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#333",
      border: "2px solid #FFF",
      borderRadius: "10px",
      width: "300px !important",
    },
  })
);
function UserFollowing() {
  const classes = useStyles();

  return (
    <div className="header__AllPageTabPanel">
      <h2>Following</h2>
      <div spacing={2} direction="row" className={classes.flexContainer}>
        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.unFollowButton}>unFollow </Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.unFollowButton}>unFollow </Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>

        <Paper className={classes.userListCard}>
          <img src={userLogo} className={classes.userProfileImage} alt={userLogo}/>
          <div className={classes.accountName}>Sandesh Mankar</div>
          <Button className={classes.followButton}>Follow Bet</Button>
        </Paper>
      </div>
    </div>
  );
}

export default UserFollowing;
