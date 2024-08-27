
import React, { useState } from 'react';

import { API_URL } from '../Data/API_path';

const Register = ({ShowLoginHandler}) => {
  const [UserName, SetUsername] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    SetLoading(true);

    if (!UserName || !email || !password) {
      SetError('All fields are required');
      SetLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"  
        },
        body: JSON.stringify({ UserName, email, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        SetUsername('');
        SetEmail('');
        SetPassword('');
        alert("Registration was Successful");
       
        
        
      } else {
        throw new Error(data.message || 'Register Failed !!');
      }

    } catch (err) {
      console.error("Register Error", err);
      alert('Registration Failed!');
    } finally {
      SetLoading(false);
    }
  }

  return (
    <div className='Head'>
      <div className="register">
        <form className='auth' onSubmit={submitHandler}>
          <h1>Sign In</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label>UserName</label>
          <input type='text' name='UserName' value={UserName} onChange={(e) => SetUsername(e.target.value)} placeholder='@Username' /><br />
          <label>Email</label>
          <input type='email' name='email' value={email} onChange={(e) => SetEmail(e.target.value)} placeholder='@ enter Email' /><br />
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={(e) => SetPassword(e.target.value)} placeholder='password' /><br />
          <div className='btnsubmit'>
            <button disabled={loading}>{loading ? 'Signing..' : 'Sign'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
