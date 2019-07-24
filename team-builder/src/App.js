import React, { useState } from 'react';
import Form from './components/Form/Form';
import Member from  './components/Team/Member';
import './App.css';

export default function App() {
  const [team, setTeam ] = useState({name: '',email: '',role: ''});
  

 



  return (
    <div className="App">
      <h2>React Form </h2>
      <Form  />
      <Member />
    </div>
  );
}


