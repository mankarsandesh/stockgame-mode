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
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.6em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 10px 0 6px #e7be4e'       
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#a72b2b ',
        outline: '1px solid #e7be4e',
        borderRadius :'10px'
      }
    },
    root : {
      backgroundColor: '#191818',
      padding:'0px 15px 15px 15px',
    },
    paper: {
      backgroundColor: "#191818",
      overflowY: "auto",
      height: "500px",
      padding:'0',
    },
    userImage: {
      width: 60,
      height: 60,
      display: "flex",
      alignItems: "center",
      marginTop: "5px",
    },
    img: {
      border:'3px solid white',
      borderRadius: "50%",
      margin: "auto",
      display: "block",
      maxWidth: "50PX",
      maxHeight: "50PX",
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
      color: "#0fa21f",
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
      color: "#d30e63",
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
      color: "#e7be4e",
      textAlign: "center",
    },
    followButton: {
      textAlign: "center",
      borderRadius: "20px",
      padding: "4px 14px",
      border: "3px solid #e7be4e",
      fontSize: "12px",
      fontWeight: "600",
      textTransform: "uppercase",
      color: "#e7be4e",
      backgroundColor: "#a72b2b",
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
      backgroundColor: "#191818",
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
      fontWeight:'600',
      padding:'0',
    },
    ratingButtonActive :{
      color: "#e7be4e",
      fontSize: "12px",
      marginRight: "6px",
      fontWeight:'600',
      padding:'0',
    },
    h2 : {
      color : '#cfa640;',
      fontWeight : '800',
      textTransform : 'uppercase',
      textAlign:'center',
      backgroundColor : '#191818',
      margin:'20px 0px 0px 20px'
    },
    sortingText : {
      fontSize :'12px',
      fontWeight : '400',
      color:'grey',
      textTransform:'capitalize '
    }
  })
);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function ComplexGrid() {
  
  const classes = useStyles();

  const [ sortButton , setSortButton ]  = React.useState('weekly');

  const sortingRanking = (value) => {
    setSortButton(value);
  };

  return (
    <div className={classes.root} >
      <h2 className={classes.h2}>Leaderboard</h2>
      <Grid className={classes.sortingWrapper} container>
        <Grid item xs={8} className={classes.sortingLeft}>
          <h4>Top 10 Leaders <small className={classes.sortingText}>(Sorting by {sortButton})</small></h4> 
        </Grid>
        <Grid item xs={4} className={classes.sortingLeaders}>
          <Button onClick={() => sortingRanking('weekly')} className={ sortButton == 'weekly' ? classes.ratingButtonActive : classes.ratingButton}>
            {" "}
            <EventIcon /> Weekly Ranking 
          </Button>
          <Button onClick={() => sortingRanking('monthly')}  className={sortButton != 'weekly' ? classes.ratingButtonActive : classes.ratingButton}>
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
                <h4 className={classes.userName}>User123444{number} </h4>
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
