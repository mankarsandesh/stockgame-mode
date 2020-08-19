import React, { Component } from "react";
import { Grid, withStyles, Button, TextField } from "@material-ui/core";

import StockAnalysisChart from "components/StockAnalysisChart/StockAnalysisChart";

const useStyles = (theme) => ({
  inputSelect: {
    display: "flex",
    border: "3px solid #FFF",
    backgroundColor: "#333",
    color: "#FFF !important",
    borderRadius: "30px",
    padding: "3px 15px",
    margin: "0px 15px",
    fontColor: "#FFF !important",
  },
  goButton: {
    borderRadius: "30px",
    padding: "4px 20px",
    border: "3px solid #e7be4e",
    color: "#e7be4e",
    backgroundColor: "#982229",
    fontWeight: "800",
    fontSize: "16px",
    marginTop: "18px",
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
  }
});

class StockAnalysis extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="header__AllPageTabPanel">
        <h2>Stock Analysis</h2>
        <Grid
          item
          xs={6}
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
              className={classes.inputSelect}
              InputProps={{
                classes: { input: classes.input },
              }}
            />
          </Grid>

          <Grid item xs={5}>
            <label className={classes.inputLabel}>To</label>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.inputSelect}
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
