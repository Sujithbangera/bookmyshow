import React from "react";

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
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
        <div className="navbar-nav mr-auto">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/movies">Movies</a>
        </div>

     
          <input
            className="form-control mr-2 rounded"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
       

        <div className="navbar-nav ml-3">
          <a className="nav-link" href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
}


// </Carousel.Item>
//       ))}
//     </Carousel>
//   );
export default NavbarComponent;
