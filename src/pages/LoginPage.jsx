import React from "react";

function LoginPage() {
  return (
    <div className="container mt-4">
      <h2>Login Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        
      </form>
    </div>
  );
}

export default LoginPage;
