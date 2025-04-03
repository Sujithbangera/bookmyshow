import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  const featuredItems = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png",
      alt: "Featured Movie 1",
      title: "Featured Movie 1",
    },

    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1743072700433_bestsellerwebnew.jpg",
      alt: "Featured Movie 2",
      title: "Featured Movie 2",
    },

    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726038890736_playcardnewweb.jpg",
      alt: "Featured Event 1",
      title: "Featured Event 1",
    },

    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1742806947019_ritvizlive1240pxx300px.jpg",
      alt: "Featured Event 2",
      title: "Featured Event 2",
    },

    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1743155482801_madhuvanfestwebregions.jpg",
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
// </Carousel.Item>
//       ))}
//     </Carousel>
//   );

export default CarouselComponent;
