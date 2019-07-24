import React from 'react';
import Member from './Member';

export default function TeamMembers(props){
    {props.members.map(member => (
       <Member member={member} />
    ))};
}