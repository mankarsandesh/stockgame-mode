import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Test from './components/Test/Test';


function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        {/* <Header /> */}

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/test" component={Test}></Route>
        </Switch>

        {/* <Footer /> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
