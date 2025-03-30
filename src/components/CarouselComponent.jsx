import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  const featuredItems = [
    {
      src: "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Featured+Movie+1",
      alt: "Featured Movie 1",
      title: "Featured Movie 1",
    },

    {
      src: "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Featured+Movie+2",
      alt: "Featured Movie 2",
      title: "Featured Movie 2",
    },

    {
      src: "https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Featured+Event+1",
      alt: "Featured Event 1",
      title: "Featured Event 1",
    },

    {
      src: "https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Featured+Event+2",
      alt: "Featured Event 2",
      title: "Featured Event 2",
    },

    {
      src: "https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Featured+Event+2",
      alt: "Featured Event 2",
      title: "Featured Event 2",
    },

  ];

  return (
    <Carousel>
      {featuredItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
