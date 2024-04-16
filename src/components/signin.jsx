import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='main-signin'>
        <div className="logo-div">
        </div>
        <div className="form">
            <h1 style={{color:"#018673", fontFamily:"monospace"}}>SignIn</h1>
            <form onSubmit={handleSignIn}>
                <div className='inputs'>
                    <input
                    className='sui-input'
                    required
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='button'>
                    <button type="submit" className='sui-button'>Sign in</button>
                </div>
            </form>
        </div>
    </div>
  );
}