import React, { useState } from "react";
import Form from './components/Form/Form';
import TeamMembers from './components/Team/TeamMembers';
import TeamData from './components/Team/TeamData';
import './App.css';


function App() {

  const [members, setMembers] = useState(TeamData);

  const [editing, setEditing] = useState(false)

  const initialFormState = {name:'', email: '', role: ''}

  const [currentMember, setCurrentMember ]= useState(initialFormState)



  const addMember = member =>{
    member.id = members.length +
    setMembers([...members, member])
  }
  const deleteMember = id  => {
    setMembers(members.filter(member => member.id !== id))
  }

  const editRow = member => {
    setEditing(true)
    setCurrentMember({name: member.name, email: member.email, role: member.role})
  }

  const updateMember = (id, updatedMember) => {
    setEditing(false)
    setMembers(members.map(member => (member.id === id ? updatedMember : member)))
  }


  return (
    <div className="App">
      <h1>SIGN UP FORM</h1>
      <Form setter={addMember} editing={editing}  setEditing={setEditing}  currentMember={currentMember}  updateMember={updateMember} members={members} setMembers={setMembers}/>
      <div className='cards'>
      {members.map(member => {
            return <TeamMembers key={member.name} member={member} updateMember={updateMember} editRow={editRow} deleteMember={deleteMember} />;
          })}
      </div>
    </div>
  );
}

export default App;