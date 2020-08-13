import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Bar } from "react-chartjs-2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#191818",
      padding: "20px",
      display: "flex",
    },
    selectWrapper: {
      display: "flex",
      justifyItems: "center",
      textAlign: "center",
      width: "100%",
      paddingBottom: "10px",
      borderBottom: "1px solid #e3b846",
    },
    selectedInputCategory: {
      display: "flex",
      justifyItems: "center",
      listStyle: "center",
      border: "5px solid #e3b846",
      color: " #e3b846",
      borderRadius: "30px",
      width: "150px",
      fontSize: "14px",
      backgroundColor: "#982229",
      textAlign: "center",
      textTransform: "uppercase",
      cursor: "pointer",
    },
    selectedInputStock: {
      display: "flex",
      justifyItems: "center",
      listStyle: "center",
      border: "5px solid #e3b846",
      color: " #e3b846",
      borderRadius: "30px",
      width: "150px",
      fontSize: "14px",
      backgroundColor: "#2c5927",
      textAlign: "center",
      textTransform: "uppercase",
      cursor: "pointer",
    },
    selectedInputLoop: {
      display: "flex",
      justifyItems: "center",
      listStyle: "center",
      border: "5px solid #e3b846",
      color: " #e3b846",
      borderRadius: "30px",
      width: "150px",
      fontSize: "14px",
      backgroundColor: "#364f97",
      textAlign: "center",
      textTransform: "uppercase",
      cursor: "pointer",
    },
    dropdownStyleCategory: {
      marginTop: "30px",
      border: "5px solid #e3b846",
      borderRadius: "5%",
      backgroundColor: "#982229",
      color: "white",
    },
    dropdownStyleStock: {
      marginTop: "30px",
      border: "5px solid #e3b846",
      borderRadius: "5%",
      backgroundColor: "#2c5927",
      color: "white",
    },
    dropdownStyleLoop: {
      marginTop: "30px",
      border: "5px solid #e3b846",
      borderRadius: "5%",
      backgroundColor: "#364f97",
      color: "white",
    },
    stockH2Name: {
      fontSize: "16px",
      color: "#e3b846",
      textTransform: "uppercase",
      fontWeight: "800",
    },
  })
);
function ChartPage() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.selectWrapper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <h2 className={classes.stockH2Name}>Select Stock</h2>
          </Grid>
          <Grid item xs={2}>
            <Select
              className={classes.selectedInputCategory}
              disableUnderline
              value=" "
              MenuProps={{ classes: { paper: classes.dropdownStyleCategory } }}
            >
              <MenuItem value=" ">Stock Type</MenuItem>
              <MenuItem value={10}>BTC1</MenuItem>
              <MenuItem value={20}>SHOOOO</MenuItem>
              <MenuItem value={30}>BTC5</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={2}>
            <Select
              className={classes.selectedInputStock}
              disableUnderline
              value=" "
              MenuProps={{ classes: { paper: classes.dropdownStyleStock } }}
            >
              <MenuItem value=" ">Stock Type</MenuItem>
              <MenuItem value={10}>BTC1</MenuItem>
              <MenuItem value={20}>BTC5</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={2}>
            <Select
              className={classes.selectedInputLoop}
              disableUnderline
              value=" "
              MenuProps={{ classes: { paper: classes.dropdownStyleLoop } }}
            >
              <MenuItem value=" ">Stock Type</MenuItem>
              <MenuItem value={10}>1 Minute</MenuItem>
              <MenuItem value={20}>5 Minute</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
      <div className="stock__chart">
       
      </div>
    </div>
  );
}

export default ChartPage;
