import React from "react";

function MovieListings() {
  const movies = [
    { 
      name: "Movie 1", 
      genre: "Action", 
      releaseDate: "2023-01-01", 
      ratings: "8.5", 
      ticketPrice: "₹1000",
      imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICAxOC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394804-ujrgqmlwjv-portrait.jpg"
    },
    { 
      name: "Movie 2", 
      genre: "Comedy", 
      releaseDate: "2023-02-01", 
      ratings: "7.0", 
      ticketPrice: "₹1000",
      imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICA5MS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00305698-jquqhbdnvv-portrait.jpg"
    },
    { 
      name: "Movie 3", 
      genre: "Drama", 
      releaseDate: "2023-03-01", 
      ratings: "9.0", 
      ticketPrice: "₹1000",
      imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAyMS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363454-yvvwucdegu-portrait.jpg"
    },
    { 
      name: "Movie 4", 
      genre: "Horror", 
      releaseDate: "2023-04-01", 
      ratings: "6.5", 
      ticketPrice: "₹1000",
      imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408154-vfbvpbydew-portrait.jpg"
    },
    { 
      name: "Movie 5", 
      genre: "Thriller", 
      releaseDate: "2023-05-01", 
      ratings: "7.5", 
      ticketPrice: "₹1000",
      imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00145294-cwtvqabkvc-portrait.jpg"
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-danger">Featured Movies</h2>
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-danger rounded shadow">
              <img 
                src={movie.imageLink} 
                className="card-img-top rounded" 
                alt={movie.name} 
              />
              <div className="card-body">
                <h5 className="card-title text-danger">{movie.name}</h5>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text">Release Date: {movie.releaseDate}</p>
                <p className="card-text">Ratings: {movie.ratings}</p>
                <p className="card-text">Ticket Price: {movie.ticketPrice}</p>
                <a href="/movies" className="btn btn-danger">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieListings;
