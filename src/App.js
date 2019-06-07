import React, { Component } from "react";
import "./CSS/App.css";

class App extends Component {
  bar = () => "bar";

  render() {
    const name = "Bob";
    const foo = () => "inner";

    const loading = false;
    const showname = true;

    if (loading) return <h4>Loading...</h4>;

    return (
      <div className="App">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Hello {showname ? name : "Guest"}!</h1>
        )}
        <br /> this is an inner: {foo()}.
        <br /> this is a class method: {this.bar()}
      </div>
    );
  }
}

export default App;
