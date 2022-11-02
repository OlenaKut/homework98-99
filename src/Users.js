import React from "react";
function Users(props) {
  return (
    <div>
      <h3>Hello </h3>
      <h3>
        {props.name}
      </h3>
      <img src={props.avatar} alt="User" />
    </div>
  );
}
export default Users;
