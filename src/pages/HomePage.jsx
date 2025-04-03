import React from "react";
import CarouselComponent from "../components/CarouselComponent";

function HomePage() {
  return (
    <div className="container mt-4">
      <CarouselComponent />
      
      {/* Featured Movies */}
      <h2 className="text-danger">Featured Movies</h2>
      <div className="row">
        {[
          { title: "Movie 1", link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICAxOC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394804-ujrgqmlwjv-portrait.jpg" },
          { title: "Movie 2", link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICA5MS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00305698-jquqhbdnvv-portrait.jpg" },
          { title: "Movie 3", link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAyMS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363454-yvvwucdegu-portrait.jpg" },
          { title: "Movie 4", link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408154-vfbvpbydew-portrait.jpg" }
        ].map((movie, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card border-danger rounded shadow">
              <img
                src={movie.link}
                className="card-img-top rounded"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title text-danger">{movie.title}</h5>
                <p className="card-text">Description of {movie.title}.</p>
                <a href={movie.link} className="btn btn-danger">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <h2 className="text-danger mt-4">Upcoming Events</h2>
      <div className="row">
        {[
          { title: "Event 1", link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00019735-vsfdtdlhkw-portrait.jpg" },
          { title: "Event 2", link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMCBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00438542-ylzrkyzagl-portrait.jpg" },
          { title: "Event 3", link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00438020-mmtwmxeyeb-portrait.jpg" }
        ].map((event, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-danger rounded shadow">
              <img
                src={event.link}
                className="card-img-top rounded"
                alt={event.title}
              />
              <div className="card-body">
                <h5 className="card-title text-danger">{event.title}</h5>
                <p className="card-text">Description of {event.title}.</p>
                <a href={event.link} className="btn btn-danger">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Promotions */}
      <h2 className="text-danger mt-4">Current Promotions</h2>
      <div className="row">
        {[
          { title: "Promotion 1", link: "/promotions/promotion1" },
          { title: "Promotion 2", link: "/promotions/promotion2" },
          { title: "Promotion 3", link: "/promotions/promotion3" }
        ].map((promotion, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-danger rounded shadow">
              <img
                src="https://via.placeholder.com/300x450"
                className="card-img-top rounded"
                alt={promotion.title}
              />
              <div className="card-body">
                <h5 className="card-title text-danger">{promotion.title}</h5>
                <p className="card-text">Details about {promotion.title}.</p>
                <a href={promotion.link} className="btn btn-danger">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
