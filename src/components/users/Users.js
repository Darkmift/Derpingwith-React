import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = props => {
  return props.loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {props.users.map(user => {
        userAmount++;
        return <UserItem userAmount={userAmount} key={user.id} user={user} />;
      })}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "5px 5px"
};
let userAmount = 0;

export default Users;
