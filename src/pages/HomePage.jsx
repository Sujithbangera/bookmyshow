import React from "react";

function HomePage() {
  return (
    <div>
      <div className="container mt-4">
        <h2>Featured Movies</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Movie 1" />
              <div className="card-body">
                <h5 className="card-title">Movie Title 1</h5>
                <p className="card-text">Description of Movie 1.</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Movie 2" />
              <div className="card-body">
                <h5 className="card-title">Movie Title 2</h5>
                <p className="card-text">Description of Movie 2.</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Movie 3" />
              <div className="card-body">
                <h5 className="card-title">Movie Title 3</h5>
                <p className="card-text">Description of Movie 3.</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Movie 3" />
              <div className="card-body">
                <h5 className="card-title">Movie Title 3</h5>
                <p className="card-text">Description of Movie 3.</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-4">Upcoming Events</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <h5 className="card-title">Event Title 1</h5>
                <p className="card-text">Description of Event 1.</p>
                <a href="/events" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Event 2" />
              <div className="card-body">
                <h5 className="card-title">Event Title 2</h5>
                <p className="card-text">Description of Event 2.</p>
                <a href="/events" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Event 3" />
              <div className="card-body">
                <h5 className="card-title">Event Title 3</h5>
                <p className="card-text">Description of Event 3.</p>
                <a href="/events" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-4">Current Promotions</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Promotion 1" />
              <div className="card-body">
                <h5 className="card-title">Promotion Title 1</h5>
                <p className="card-text">Details about Promotion 1.</p>
                <a href="/promotions" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Promotion 2" />
              <div className="card-body">
                <h5 className="card-title">Promotion Title 2</h5>
                <p className="card-text">Details about Promotion 2.</p>
                <a href="/promotions" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt="Promotion 3" />
              <div className="card-body">
                <h5 className="card-title">Promotion Title 3</h5>
                <p className="card-text">Details about Promotion 3.</p>
                <a href="/promotions" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
