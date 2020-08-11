import React from "react";
import "./Settings.css";

import { withStyles } from "@material-ui/core/styles";
import { purple, red } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const PurpleSwitch = withStyles({
  switchBase: {
    color: red[300],
    "&$checked": {
      color: red[500],
    },
    "&$checked + $track": {
      backgroundColor: red[500],
    },
  },
  checked: {
    color: "red",
  },
  track: {},
})(Switch);

export default function Settings() {
  // Set State
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
  });

  // OnCLick Event
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup aria-label="position" row className="form__settings">
      <div className="formLabel">
          <h2>Game Settings</h2>
        <FormControlLabel
          control={
            <PurpleSwitch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          color="red"
          label="Sound Effects"
          labelPlacement="top"
        />
        <FormControlLabel
          control={
            <PurpleSwitch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
            />
          }
          label="Background Music"
          labelPlacement="top"
        />
        <FormControlLabel
          control={
            <PurpleSwitch
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          }
          label="FullScreen Mode"
          labelPlacement="top"
        />
      </div>
    </FormGroup>
  );
}
