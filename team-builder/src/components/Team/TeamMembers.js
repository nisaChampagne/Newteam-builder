import React from "react";


export default function TeamMembers(props) {
  const member = props.member;

  return (
      <div className='member-cards'>
          <h4>{member.name}</h4>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        <button onClick={() => props.editRow(member)}>Edit</button>
        <button onClick={() => props.deleteMember(member.id)}>Delete</button>
      </div>
  );
} 