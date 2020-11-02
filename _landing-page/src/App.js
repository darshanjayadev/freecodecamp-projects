import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "normalize.css";
import "./App.css";

import Header from "./Components/Header/Header";

class App extends Component{
  render(){
    return(
      <div className="App">
        <section>
          <Header />
        </section>
      </div>
    );
  }
}

export default hot(module)(App);