import React from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import userLogo from "shared/images/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userProfileImage: {
      borderRadius: "50%",
      border: "5px solid #e7be4e",
      width: "70px",
    },
    userAccountBalance: {
      border: "2px solid #e7be4e",
      padding: "10px 30px",
      borderRadius: "5px",
      margin: "10px",
      backgroundColor: "#3959A0",
      textAlign: "center",
    },
    userAccountAmount: {
      border: "2px solid #e7be4e",
      padding: "10px 30px",
      borderRadius: "5px",
      margin: "10px",
      backgroundColor: "#2B5425",
      textAlign: "center",
    },
    accountBalanceLabel: {
      fontSize: "14px",
      margin: "0",
      color: "#e7be4e",
    },
    accountBalanceAmount: {
      fontSize: "30px",
      margin: "0",
      color: "#FFF",
      fontWeight: "800",
    },
    accountCurrency: {
      color: "white",
    },
    accountName: {
      color: "#e7be4e",
      fontSize: "24px",
      margin: "0",
    },
    accountStatus: {
      color: "white",
      textTransform: "capitalize ",
    },
    inputText: {
      display: "flex",
      alignItems: "center",
      border: "3px solid #FFF",
      backgroundColor: "#333",
      color: "#FFF !important",
      borderRadius: "30px",
      padding: "10px",    
      marginBottom: "20px",
      width:'100%'
    },
    inputSelect: {
      display: "flex",
      alignItems: "center",
      border: "3px solid #FFF",
      backgroundColor: "#333",
      color: "#FFF !important",
      borderRadius: "30px",
      padding: "5px",
      marginBottom: "20px",
      width:'340px'
    },
    inputLabel: {
      fontWeight: "800",
      color: "grey",
    },
    saveButton: {
      borderRadius: "30px",
      padding: "4px 20px",
      width: "130px",
      border: "3px solid #e7be4e",
      color: "#e7be4e",
      backgroundColor: "#982229",
      marginRight: "15px",
      fontWeight: "800",
      fontSize: "16px",
    },
    cancelButton: {
      borderRadius: "30px",
      padding: "4px 20px",
      width: "130px",
      border: "3px solid #FFF",
      color: "#FFF",
      backgroundColor: "#3B3B3B",
      marginRight: "15px",
      fontWeight: "800",
      fontSize: "16px",
    },
  })
);

function UserBasicInfo() {
  const classes = useStyles();

  return (
    <div className="header__AllPageTabPanel">
      <h2>Basic Information</h2>
      <Grid container>
        <Grid
          item
          xs={4}
          container
          direction="column"
          alignItems="center"
        >
          <img src={userLogo} className={classes.userProfileImage} alt="User Profile" />
          <div className={classes.accountName}>Sandesh Mankar</div>
          <p className={classes.accountStatus}>online Status : 2 Hours</p>
          <div className={classes.userAccountBalance}>
            <h3 className={classes.accountBalanceLabel}> Account Balance</h3>
            <span className={classes.accountBalanceAmount}>16536.00 </span>{" "}
            <sup className={classes.accountCurrency}>kip</sup>
          </div>
          <div className={classes.userAccountAmount}>
            <h3 className={classes.accountBalanceLabel}> Account Balance</h3>
            <span className={classes.accountBalanceAmount}>16536.00 </span>{" "}
            <sup className={classes.accountCurrency}>kip</sup>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={4}>
              <label className={classes.inputLabel}>User Name</label>
            </Grid>
            <Grid item xs={8}>
              <input type="text " className={classes.inputText} />
            </Grid>

            <Grid item xs={4}>
              <label className={classes.inputLabel}>First Name</label>
            </Grid>
            <Grid item xs={8}>
              <input type="text " className={classes.inputText} />
            </Grid>
            <Grid item xs={4}>
              <label className={classes.inputLabel}>Last Name</label>
            </Grid>
            <Grid item xs={8}>
              <input type="text " className={classes.inputText} />
            </Grid>

            <Grid item xs={4}>
              <label className={classes.inputLabel}>Gender</label>
            </Grid>
            <Grid item xs={8}>
              <Select className={classes.inputSelect} value=" ">
                <MenuItem value=" ">Gender</MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={4}>
              <label className={classes.inputLabel}>Email</label>
            </Grid>
            <Grid item xs={8}>
              <input type="text " className={classes.inputText} />
            </Grid>

            <Grid item xs={4}>
              <label className={classes.inputLabel}>Country</label>
            </Grid>
            <Grid item xs={8}>
              <Select className={classes.inputSelect} value=" ">
                <MenuItem value=" ">Select Country</MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
              <Button className={classes.saveButton}>Save</Button>
              <Button className={classes.cancelButton}>Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserBasicInfo;
