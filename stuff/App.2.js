import React, { Component } from "react";
import "./App.css";
import { Person } from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 18 },
      { name: "bob", age: 28 },
      { name: "bill", age: 38 }
    ]
  };

  render() {
    let switchNameHandler = () => {
      console.log(this);
      this.setState({
        persons: [
          { name: "Sammie", age: 42 },
          { name: "bob", age: 28 },
          { name: "Jay", age: 38 }
        ]
      });
    };
    return (
      <div className="App">
        <h1>Hi,me :)</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name="Jack" age="30" />
        <Person>likes: I like chips</Person>
        {this.state.persons.map((el, i) => (
          <Person
            name={this.state.persons[i].name}
            age={this.state.persons[i].age}
          />
        ))}
      </div>
    );
  }
}

export default App;
