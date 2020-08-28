import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Test from "./components/Test/Test";
import { render } from "react-dom";

class App extends React.Component {
  // constructor() {
  //   this.state = { isLoading: true };
  // }

  componentDidMount(){

   
    console.log("App Mounted");
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/test" component={Test}></Route>
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
