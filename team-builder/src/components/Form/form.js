import React, {useState} from 'react';

function Form() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: '',
    })

 function submitHandler (event) {
     event.preventDefault();
     console.log(formState)
 };

 function changeHandler (event) {
   console.log('GUUD', formState)
     setFormState({...formState, [event.target.name]: event.target.value});
 };

  return (
      <div className='form'>
        <form onSubmit={submitHandler}>
          <label>  Name:
            <input 
              name='name'
              type='text'
              placeholder= 'Name'
              onChange={changeHandler}
            />    
          </label>
          <label>  Email: 
            <input 
              name='email'
              type='email'
              placeholder='Email'
              onChange={changeHandler}
            />    
          </label>
          <label>  Role:  
            <input 
              name='role'
              type='text'
              placeholder='Role'
              onChange={changeHandler}
            />    
            </label>
            <button type='submit'>Submit</button>
        </form>    
      </div>
  )
}

export default Form; 