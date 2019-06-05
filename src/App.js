import React, { useState } from "react";
import "./App.css";
import { Person } from "./Person/Person";

const app = props => {
  let [personsState, setPersonsState] = useState({
    personsState: [
      { name: "max", age: 18 },
      { name: "bob", age: 28 },
      { name: "bill", age: 38 }
    ]
  });

  setPersonsState = () => {
    [
      { name: "Sammie", age: 42 },
      { name: "bob", age: 28 },
      { name: "Jay", age: 38 }
    ];
  };

  // let renderPersons;
  // for (let i = 0; i < personsState.length; i++) {
  //   renderPersons.push(
  //     <Person name={personsState[i].name} age={personsState[i].age} />
  //   );
  // }

  return (
    <div className="App">
      <h1>Hi,me :)</h1>
      <button onClick={setPersonsState}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={personsState[0].age} />
      <Person>likes: I like chips</Person>
      {/* {renderPersons} */}
    </div>
  );
};

export default app;
