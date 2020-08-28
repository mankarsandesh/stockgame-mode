import React, { Component } from "react";
import { Grid, withStyles, Button, TextField } from "@material-ui/core";

import Chart from "components/Chart/ChartJs";

const useStyles = (theme) => ({
  inputSelect: {
    display: "flex",
    border: "2px solid #FFF",
    backgroundColor: "#333",
    color: "#FFF !important",
    borderRadius: "30px",
    padding: "7px 15px",
    margin: "0px 15px",
    fontColor: "#FFF !important",
    cursor:'pointer'
  },
  goButton: {
    borderRadius: "30px",
    padding: "3px 20px",
    border: "3px solid #e7be4e",
    color: "#e7be4e",
    backgroundColor: "#982229",
    fontWeight: "800",
    fontSize: "14px",
    marginTop: "40px",
  },
  inputLabel: {
    color: "grey",
    padding: "10px 30px",
    fontWeight: "800",
  },
  input: {
    "&::placeholder": {
      fontStyle: "italic",
      color: "#FFF",
    },
  },
  bottomUserData : {
      color:'grey',
      margin:'5px 10px'
  },
  bottomLabel : {
      color:'#FFF',
      fontWeight:'600'
  }
});

class OnlineHistory extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="header__AllPageTabPanel">
        <h2>Online History</h2>
        <Grid
          item
          xs={7}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={5}>
            <label className={classes.inputLabel}>From</label>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              InputProps={{
                disableUnderline: true,
                classes: { input: classes.inputSelect },
              }}
            />
          </Grid>

          <Grid item xs={5}>
            <label className={classes.inputLabel}>To</label>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              InputProps={{
                disableUnderline: true,
                classes: { input: classes.inputSelect },
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button className={classes.goButton}>Go</Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Chart />
        </Grid>
        <Grid item xs={12} container direction="row" alignItems="center">
          <div className={classes.bottomUserData}>
            <label className={classes.bottomLabel}>Player ID :</label> 1888
          </div>
          <div className={classes.bottomUserData}>
            <label className={classes.bottomLabel}>Online Time :</label> 7 Hours, 35 Minute
          </div>
          <div className={classes.bottomUserData}>
            <label className={classes.bottomLabel}>Total Online :</label> 2 Days, 15hours,11 Minute
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(OnlineHistory);
