import React, { useState } from "react";
import Form from './components/Form/Form';
import TeamMembers from './components/Team/TeamMembers';
import TeamData from './components/Team/TeamData';
import './App.css';


function App() {

  const [members, setMembers] = useState(TeamData);


  const addMember = member =>{
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <h1>SIGN UP FORM</h1>
      <Form setter={addMember} />
      <div className='cards'>
      {members.map(member => {
            return <TeamMembers key={member.name} member={member} />;
          })}
      </div>
    </div>
  );
}

export default App;