import React from "react";
import "./LoginForm.css"; // yaha CSS file import ho rahi hai

function LoginForm() {
  return (
    <div className="container">
      <div className="form-box">
        <h1 className="welcome">Welcome!</h1>
        <h2 className="login-title">Login Form</h2>
        <input type="text" placeholder="Enter username" className="input-box" />
        <input type="password" placeholder="Enter password" className="input-box" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
