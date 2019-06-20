import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./pages/Search"
import {Router, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
