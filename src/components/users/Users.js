import React from "react";
import UserItem from "./UserItem";

const Users = props => {
  return (
    <div style={userStyle}>
      {props.users.map(user => {
        // return <div key={user.id}>{user.login}</div>;
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "5px 5px"
};

export default Users;
