import React from "react";


const TeamMembers = (props) => {


  return (
    <div className = "team-card">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default TeamMembers;