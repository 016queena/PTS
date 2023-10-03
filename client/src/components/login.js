import React, { useState } from 'react';
import './../styles/login.css'; // CSS file for styling
import download from './../images/download.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'teacher1', password: 'teacher1', role: 'teacher' },
    { username: 'student1', password: 'student1', role: 'student' },
    { username: 'parent1', password: 'parent1', role: 'parent' },
    { username: 'principal1', password: 'principalpassword1', role: 'principal' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      // Redirect to the appropriate dashboard based on the user's role
      switch (user.role) {
        case 'admin':
          window.location.href = './admin-panel';
          break;
        case 'teacher':
          window.location.href = './teacherPanel';
          break;
        case 'student':
          window.location.href = './studentPanel';
          break;
        case 'parent':
          window.location.href = './parentPanel';
          break;
        case 'principal':
          window.location.href = './principalDashboard';
          break;
        default:
          setError('Invalid user role');
          break;
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>Govt. Graduate College Jhelum</h1>
      </header>
      <div className="logo-container">
      </div>
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


