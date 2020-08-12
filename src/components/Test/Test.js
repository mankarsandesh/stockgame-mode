import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { color } from 'styled-system'

const App = (props) => (
  <ThemeProvider theme={theme}>
   
  </ThemeProvider>
);

export default App;
