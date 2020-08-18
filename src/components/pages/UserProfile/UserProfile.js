import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  MenuItem,
  Button,
  Select,
} from "@material-ui/core";
import userLogo from "shared/images/logo.png";
import Chart from "components/Chart/ChartJs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      backgroundColor: "#333",
      padding: "20px",
    },
    userProfileImage: {
      borderRadius: "50%",
      border: "5px solid #e7be4e",
      width: "100px",
    },
    accountName: {
      color: "#e7be4e",
      fontSize: "24px",
      margin: "0",
    },
    accountStatus: {
      color: "#FFF",
      textTransform: "capitalize ",
    },
    userAccountLeft: {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
      height: "150px",
      padding: "0 10px",
    },
    userAccountName: {
      marginLeft: "10px",
    },
    userAccountRight: {
      padding: "0 10px",
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
      height: "150px",
    },
    followBetButton: {
      borderRadius: "30px",
      padding: "6px 14px",
      border: "3px solid #e7be4e",
      color: "#e7be4e",
      backgroundColor: "#982229",
      marginRight: "15px",
      fontWeight: "800",
      fontSize: "14px",
    },
    selectBrown: {
      border: "3px solid #FFF",
      color: "#FFF",
      padding: "2px 10px",
      fontSize: "18px",
      borderRadius: "20px",
      backgroundColor: "#333",
      margin: "0px 10px",
    },
    HistoryLabel: {
      color: "#FFF",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    accountLabel: {
      fontSize: "14px",
      margin: "0",
      textTransform: "uppercase",
      color: "#e7be4e",
    },
    accountValue: {
      fontSize: "26px",
      margin: "0",
      color: "#FFF",
      fontWeight: "800",
    },
    flexBlue: {
      border: "2px solid #e7be4e",
      padding: "10px 30px",
      borderRadius: "5px",
      margin: "10px",
      backgroundColor: "#33488E",
      textAlign: "center",
    },
    flexRed: {
      border: "2px solid #e7be4e",
      padding: "10px 30px",
      borderRadius: "5px",
      margin: "10px",
      backgroundColor: "#A92B2C",
      textAlign: "center",
    },
    flexBrown: {
      border: "2px solid #e7be4e",
      padding: "10px 30px",
      borderRadius: "5px",
      margin: "10px",
      backgroundColor: "#674021",
      textAlign: "center",
    },
    flexGreen: {
      border: "2px solid #e7be4e",
      padding: "10px 30px",
      borderRadius: "5px",
      margin: "10px",
      backgroundColor: "#32642D",
      textAlign: "center",
    },
    accountCurrency: {
      color: "white",
    },
  })
);
function UserProfile() {
  const classes = useStyles();
  return (
    <div className={classes.flexContainer}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.userAccountLeft}>
            <img src={userLogo} className={classes.userProfileImage} />
            <div className={classes.userAccountName}>
              <h2 className={classes.accountName}>Sandesh Mankar</h2>
              <p className={classes.accountStatus}>
                Last Active : 0 hours,24 minutes, 54 seconds
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.userAccountRight}>
            <label className={classes.HistoryLabel}>History Period</label>
            <Select className={classes.selectBrown} value=" ">
              <MenuItem value=" ">1 Month</MenuItem>
              <MenuItem value={10}>1 Month</MenuItem>
              <MenuItem value={20}>2 Month</MenuItem>
              <MenuItem value={30}>3 Month</MenuItem>
            </Select>

            <Button className={classes.followBetButton}>Follow Bet</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className={classes.flexBlue}>
            <h3 className={classes.accountLabel}> Winning Rate </h3>
            <span className={classes.accountValue}>95%</span>{" "}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.flexRed}>
            <h3 className={classes.accountLabel}> Total Bets</h3>
            <span className={classes.accountValue}>564 </span>{" "}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.flexBrown}>
            <h3 className={classes.accountLabel}> Followers </h3>
            <span className={classes.accountValue}>10</span>{" "}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.flexGreen}>
            <h3 className={classes.accountLabel}> Winning Amount</h3>
            <span className={classes.accountValue}>16536.00 </span>{" "}
            <sup className={classes.accountCurrency}>kip</sup>
          </div>
        </Grid>
      </Grid>
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default UserProfile;
