import React, { useState, useEffect } from "react";

export default function Form(props) {


  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    id: null
  });
  
  const setter=props.setter;

  useEffect(() => {
    setForm(props.currentMember)
  }, [props])

  function submitHandler(event){
    event.preventDefault();
    console.log("form", setForm);
    setter(form)////adding member to the form ?

  };

  function changeHandler(event) {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });

  };

  return (
    <div className='card'>
      <form onSubmit={submitHandler}>
        <fieldset>
        <legend>Add to the Team!</legend>
          <div className='name'>
            <label>
              Team Member:
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Enter Team Member Name"
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="email">
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={form.email}
                placeholder="Enter Email"
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="role">
            <label>
              Role:
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={form.role}
                onChange={changeHandler}
              />
            </label>
          </div>
          <button type="submit" >Submit</button>
        </fieldset>
      </form>
    </div>
  )
}