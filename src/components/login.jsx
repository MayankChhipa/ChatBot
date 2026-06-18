import './login.css';

export function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="userid">User ID</label>
          <input id="userid" name="userid" type="text" placeholder="Enter your user ID" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Enter your password" />
        </div>

        <button type="submit">Sign In</button>
      </form>

      <div className="signup-link">
        <span>New here?</span> <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}