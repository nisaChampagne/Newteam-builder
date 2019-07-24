import React from 'react';

export default function Members(props){
    // const person = props.person;
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Email: {props.email}</p>
            <p>Role: {props.role}</p>
            <button>Edit Member</button>
        </div>
    )
}