import React from "react";

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">BookMyShow</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movies">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sports">Sports</a>
          </li>
          
        </ul>

       
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    

        <div className="navbar-nav ml-auto">
          <a className="nav-link" href="/signin">Sign Up</a>
          <a className="nav-link" href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;