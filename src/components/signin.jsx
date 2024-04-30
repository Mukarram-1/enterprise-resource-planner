import React, { useState, useEffect } from 'react';

export default function Signin() {
  const [ID, setID] = useState('1');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    resetUserRoles();
  }, []);

  const resetUserRoles = async () => {
    try {
      const response = await fetch('http://localhost:4000/resetRoles', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to reset user roles');
      }
    } catch (error) {
      console.error('Error resetting user roles:', error);
    }
  };

  const updateUserRole = async (role) => {
    try {
      const response = await fetch('http://localhost:4000/setRole', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, role })
      });
      if (!response.ok) {
        throw new Error('Failed to update user role');
      }
    } catch (error) {
      console.error('Error updating user role:', error);
      // Handle error as needed
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    

    try {
      const response = await fetch('http://localhost:4000/loginAuthentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ID })
      });

      if (!response.ok) {
        throw new Error('User not found');
      }

      const userData = await response.json();

      if (username === userData.username && password === userData.password && ID === '1') {
        updateUserRole(true);
        window.location.href = '/dashboard';
      }
      else if (username === userData.username && password === userData.password && ID === '2') {
        updateUserRole(true);
        window.location.href = '/dashboard';
      }
      else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Error signing in. Please try again.');
    }
  };

  return (
    <div className='main-signin'>
      <div className="logo-div"></div>
      <div className="form">
        <h1 style={{ color: "#018673", fontFamily: "monospace" }}>SignIn</h1>
        <form onSubmit={handleSignIn}>
          <div className='inputs'>
            <select placeholder='Login as' id="ID" value={ID} onChange={(e) => setID(e.target.value)}>
              <option value="1">Admin</option>
              <option value="2">Manager</option>
            </select>
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