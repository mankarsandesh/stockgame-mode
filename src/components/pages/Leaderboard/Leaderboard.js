import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: "#2e2e2e",
      overflowY: "auto",
      height: "600px",
    },
    userImage: {
      width: 60,
      height: 60,
      display: "flex",
      alignItems: "center",
      margin: "10px 0px",
    },
    img: {
      borderRadius: "50%",
      margin: "auto",
      display: "block",
      maxWidth: "60PX",
      maxHeight: "60PX",
    },
    textRate: {
      fontSize: "12px",
      textTransform: "uppercase",
      textAlign: "center",
      color: "white",
      margin: "10px 0px",
    },
    bodyRate: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#2EFF4D ",
      textAlign: "center",
    },
    textBets: {
      fontSize: "12px",
      textTransform: "uppercase",
      textAlign: "center",
      color: "white",
      margin: "10px 0px",
    },
    bodyBets: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#FF3F6B",
      textAlign: "center",
    },
    textAmount: {
      fontSize: "12px",
      textTransform: "uppercase",
      textAlign: "center",
      color: "white",
      margin: "10px 0px",
    },
    bodyAmount: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#FFDE25",
      textAlign: "center",
    },
    followButton: {
      textAlign: "center",
      borderRadius: "20px",
      padding: "4px 14px",
      border: "3px solid #FFDE25",
      fontSize: "12px",
      fontWeight: "600",
      textTransform: "uppercase",
      color: "white",
      backgroundColor: "#9B281A",
      display: "flex",
      alignItems: "center",
      margin: "15px auto",
    },
    userList: {
      backgroundColor: "#555555",
      padding: "2px 10px",
      borderRadius: "4px",
      margin: "10px 0px",
    },
    userName: {
      color: "white",
      fontSize: "14px",
      marginLeft: "10px",
    },
    sortingWrapper: {
      display: "flex",
      color: "white",
    },
    sortingLeft: {
      alignItems: "flex-start",
      display: "flex",
      alignItems: "center",
    },
    sortingLeaders: {
      alignItems: "flex-end",
      display: "flex",
      color: "white",
      alignItems: "center",
    },
    ratingButton: {
      color: "white",
      fontSize: "12px",
      marginRight: "6px",
    },
  })
);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="header__AllPageTabPanel">
      <h2>Leaderboard</h2>
      <Grid className={classes.sortingWrapper} container>
        <Grid item xs={8} className={classes.sortingLeft}>
          <h4>Top 10 Leaders</h4>
        </Grid>
        <Grid item xs={4} className={classes.sortingLeaders}>
          <Button className={classes.ratingButton}>
            {" "}
            <EventIcon /> Weekly Ranking
          </Button>
          <Button className={classes.ratingButton}>
            {" "}
            <EventIcon /> Monthly Ranking
          </Button>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        {numbers.map((number) => (
          <Grid container className={classes.userList} key={number}>
            <Grid item xs={2}>
              <div className={classes.userImage}>
                <img
                  className={classes.img}
                  alt="Sandesh Mankar"
                  src="https://miro.medium.com/fit/c/160/160/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
                />
                <h4 className={classes.userName}>user12{number} </h4>
              </div>
            </Grid>
            <Grid item xs={3}>
              <h3 className={classes.textRate}>WINNING RATE</h3>
              <Typography className={classes.bodyRate} gutterBottom>
                95 %
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <h3 className={classes.textBets}>Bets</h3>
              <Typography className={classes.bodyBets} gutterBottom>
                150
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <h3 className={classes.textAmount}>WINNING Amount</h3>
              <Typography className={classes.bodyAmount} gutterBottom>
                $15,500.00
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button className={classes.followButton}>Follow Bet</Button>
            </Grid>
          </Grid>
        ))}
      </Paper>
    </div>
  );
}
