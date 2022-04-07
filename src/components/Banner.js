import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Bannner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-[55px] bg-gradient-to-r from-gray-100/50 to-transparent bottom-0 z-20" />
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            alt=""
            loading="lazy"
            className="object-fill"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
            loading="lazy"
            className="object-fill"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
            loading="lazy"
            className="object-fill"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
            loading="lazy"
            className="object-fill"
          />
        </div>
      </Carousel>
    </div>
  );
}
