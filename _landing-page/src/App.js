import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "normalize.css";
import "./App.css";

import Header from "./Components/Header/Header";
import CardGenerator from "./Components/CardGenerator/CardGenerator";

class App extends Component{
  render(){
    return(
      <div className="App">
        <article>
          <Header />
          <CardGenerator />
        </article>
      </div>
    );
  }
}

export default hot(module)(App);