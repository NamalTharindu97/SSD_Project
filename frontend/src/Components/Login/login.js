import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="card">
        <div className="left-side">
          <img
            src="https://img.freepik.com/free-photo/portrait-woman-working-startup-company_23-2149116501.jpg?size=626&ext=jpg&ga=GA1.1.554721202.1695660623&semt=ais"
            alt="LoginImage"
          />
        </div>
        <div className="right-side">
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
