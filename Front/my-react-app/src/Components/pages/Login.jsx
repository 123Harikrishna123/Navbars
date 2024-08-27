
import React, { useState } from 'react';
import { API_URL } from '../Data/API_path';


const Login = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [error, SetError] = useState('');
  const [success, SetSuccess] = useState('');

  const submitLoginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      SetError('Both fields are required');
      SetSuccess('');
      return;
    }

    try {
      let response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        SetEmail('');
        SetPassword('');
        SetSuccess('Login success');
        localStorage.setItem('token', data.token);
        SetError('');
        
      } else {
        SetError(data.message || 'Details not matched, login failed');
        SetSuccess('');
      }
    } catch (err) {
      console.error('Login error', err);
      SetError("An error occurred. Please try again.");
      SetSuccess('');
    }
  }

  return (
    <div className='Head'>
      <div className="loginSec">
        <form className='auth' onSubmit={submitLoginHandler}>
          <h1>Login</h1>

          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
          <label>Email</label>
          
          <input type='email' name='Email' value={email} onChange={(e) => SetEmail(e.target.value)} placeholder='@ Email' />
          <label>Password</label>
          <input type='password' name='Password' value={password} onChange={(e) => SetPassword(e.target.value)} placeholder='Password' />
          <div className="btnsubmit">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
