import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }

      localStorage.setItem('chatbotUser', JSON.stringify(data.user));
      navigate('/HomePage');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userid">User ID</label>
          <input
            id="userid"
            name="userid"
            type="text"
            placeholder="Enter your user ID"
            value={userid}
            onChange={(event) => setUserid(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {errorMessage && <div className="login-error">{errorMessage}</div>}

        <button type="submit">Sign In</button>
      </form>

      <div className="signup-link">
        <span>New here?</span> <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}