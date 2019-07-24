import React, { useState } from "react";

export default function Form() {

  const [formState, setFormState] = useState({
   name:'',
   email: '',
   role:','
  });

  function changeHandler(event) {
    console.log("changed text", event.target.name);
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Here you go:", formState);
  }

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
        <legend>Sign up</legend>
        <div className="username">
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="John Smith"
              onChange={changeHandler}
            />
          </label>
        </div>
       <div className='email'>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            onChange={changeHandler}
          />
        </label>
        </div>  
        <div className='role'>
        <label>
          Role:
          <input
            type="text"
            name="role"
            placeholder="UX Designer"
            onChange={changeHandler}
          />
        </label>
        </div>           
        <div className='agree'>
          <h5>Click to agree to terms and conditions</h5>
          <input type='checkbox'>
          </input>
        </div>
        <button type="submit">Submit</button> 
    </form>
  </div>
);
}