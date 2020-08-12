import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: "auto",
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      borderRadius: "50%",
      margin: "auto",
      display: "block",
      maxWidth: "60PX",
      maxHeight: "60PX",
    },
  })
);

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="header__AllPageTabPanel">
      <h2>Leaderboard</h2>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://miro.medium.com/fit/c/160/160/2*fQO45CfgZstbBjeHxeSxHA.jpeg"
              />
              <h4>Sandesh Mankar</h4>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <h3>WINNING RATE</h3>

                <Typography variant="body2" gutterBottom>
                  95 %
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs container direction="column">
              <Grid item xs>
                <h3>BeTS</h3>

                <Typography variant="body2" gutterBottom>
                  150
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs container direction="column">
              <Grid item xs>
                <h3>WINNING AMMOUNT</h3>

                <Typography variant="body2" gutterBottom>
                  $ 105,2500
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Button>FOLLOW BET</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
