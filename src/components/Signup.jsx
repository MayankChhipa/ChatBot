import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

export function Signup() {
  const [name, setName] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!name || !userid || !password || !confirmPassword) {
      return setErrorMessage('Please fill in all fields.');
    }

    if (password !== confirmPassword) {
      return setErrorMessage('Passwords do not match.');
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, userid, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed.');
      }

      localStorage.setItem('chatbotUser', JSON.stringify(data.user));
      navigate('/HomePage');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="userid">User ID</label>
          <input
            id="userid"
            type="text"
            placeholder="Choose a user ID"
            value={userid}
            onChange={(event) => setUserid(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>

        {errorMessage && <div className="login-error">{errorMessage}</div>}

        <button type="submit">Sign Up</button>
      </form>

      <div className="signup-link">
        <span>Already have an account?</span> <Link to="/">Log in</Link>
      </div>
    </div>
  );
}
