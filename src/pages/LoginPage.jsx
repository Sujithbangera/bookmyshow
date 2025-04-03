import React from "react";

function LoginPage() {
  return (
    <div className="container mt-4">
      <h2 className="text-danger">Login Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email" className="text-danger">Email address</label>
          <input 
            type="email" 
            className="form-control border-danger" 
            id="email" 
            placeholder="Enter email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-danger">Password</label>
          <input 
            type="password" 
            className="form-control border-danger" 
            id="password" 
            placeholder="Password" 
          />
        </div>
        <button type="submit" className="btn btn-danger">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
