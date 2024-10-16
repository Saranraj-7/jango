import React from "react";
import '../App.css';

const SignupPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <b className="fs-2 d-flex justify-content-center mb-2">JANGO</b>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" className="rounded-3" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" className="rounded-3" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label>Org-ID</label>
            <input type="email" className="rounded-3" placeholder="Enter your Org-ID" />
          </div>
          <div className="input-group">
            <label>Type</label>
            <select className="rounded-3 input-dropdown">
              <option value="customer">Customer</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <button type="submit" className="login-button mt-2 mb-3">Sign Up</button>
          <a className="text-black d-flex justify-content-center">Login</a>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
