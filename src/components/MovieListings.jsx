import React from "react";

function MovieListings() {
  const movies = [
    { name: "Movie 1", genre: "Action", releaseDate: "2023-01-01", ratings: "8.5", ticketPrice: "$10" },
    { name: "Movie 2", genre: "Comedy", releaseDate: "2023-02-01", ratings: "7.0", ticketPrice: "$12" },
    { name: "Movie 3", genre: "Drama", releaseDate: "2023-03-01", ratings: "9.0", ticketPrice: "$15" },
    { name: "Movie 4", genre: "Horror", releaseDate: "2023-04-01", ratings: "6.5", ticketPrice: "$8" },
    { name: "Movie 5", genre: "Thriller", releaseDate: "2023-05-01", ratings: "7.5", ticketPrice: "$11" },
    { name: "Movie 5", genre: "Thriller", releaseDate: "2023-05-01", ratings: "7.5", ticketPrice: "$11" },
  ];

  return (
    <div className="container mt-4">
      <h2>Featured Movies</h2>
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src="https://via.placeholder.com/300x450" className="card-img-top" alt={movie.name} />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text">Release Date: {movie.releaseDate}</p>
                <p className="card-text">Ratings: {movie.ratings}</p>
                <p className="card-text">Ticket Price: {movie.ticketPrice}</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieListings;
