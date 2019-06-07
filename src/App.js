import React, { Component } from "react";
import { Navbar } from "./components/layout/Navbar";
import "./CSS/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar title="Github-finder" icon="fab fa-github" /> */}
        {/* <Navbar title={[1,2,3,4]} />
         *  when title=PropTypes.string.isRequired,this throws consolee type error
         */}
        <Navbar />
      </div>
    );
  }
}

export default App;
