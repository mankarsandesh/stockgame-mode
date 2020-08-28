import React, { Component } from "react";
import { Grid, withStyles, Button, TextField } from "@material-ui/core";

import StockAnalysisChart from "components/StockAnalysisChart/StockAnalysisChart";

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
    cursor:'pointer',
    "&::placeholder": {
      fontStyle: "italic",
      fontColor: "#FFF",
      color: "#FFF !important",
    },
  },
});

class StockAnalysis extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="header__AllPageTabPanel">
        <h2>Stock Analysis</h2>
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
             color="primary"
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
          <StockAnalysisChart />
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(StockAnalysis);
