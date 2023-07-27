import React, { useState } from 'react';
import users from '../../UserData';
import { useNavigate, Navigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const userSession = localStorage.getItem('USER_SESSION');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('hello');

    const user = users.find((user) => user.username === username);

    console.log(user, password);

    if (!user && user.password !== password) {
      setError('Invalid username or password');
      return;
    }

    localStorage.setItem('USER_SESSION', JSON.stringify(user));

    navigate('/todo');
    console.log('login successfully');
  };

  if (userSession) {
    return <Navigate to={'/todo'} />
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-group">
        <button type="submit">Login</button>
      </div>
      <label>{error}</label>
    </form>
  );
};

export default LoginForm;
