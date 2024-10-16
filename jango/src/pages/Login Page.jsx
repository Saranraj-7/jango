import React from "react";
import '../App.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <b className="fs-2 d-flex justify-content-center mb-2">Login</b>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" className="rounded-3" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" className="rounded-3" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button mt-2 mb-3">Login</button>
          <a className="text-black d-flex justify-content-center">Sign Up</a>
        </form>
      </div>
    </div>
  );
};
  
export default LoginPage;
