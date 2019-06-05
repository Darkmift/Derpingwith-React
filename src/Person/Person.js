import React from "react";

const Person = props => {
  let randomshit = Math.floor(Math.random() * 30);
  let { age, name } = props;
  name = name || "bob";
  age = age || 20;

  return (
    <div>
      <p>
        I'm {name} and I am {age} years old
        <span>&nbsp;{props.children}&nbsp;</span>
      </p>
    </div>
  );
};

export { Person };
