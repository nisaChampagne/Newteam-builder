import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from './components/Form/Form';
import TeamMembers from './components/Team/TeamMembers'
import TeamData from './components/Team/TeamData';

import './App.css';


function App() {

  const [member, setMember] = useState('user')


  return (
    <div className="App">
      <Form
        member={member}
        setMember={setMember}
       />
      <TeamMembers
        TeamData={TeamData}
       />
    </div>
  );
}

export default App;