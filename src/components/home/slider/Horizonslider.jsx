import React from 'react';
import '../slider/horizonslider.scss';

const images = [
  "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65c5b1dc5fd5c609090560c5/valentines-eoss-banner-3-1920x1080.jpg",
  "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65c1ea2bb7875674a09a3a84/winter-collection-banner-home-page-2-1--1920x1080.jpg",
  "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65c1ea1b2794aac496ea368c/farm-to-fork-banner1-home-page-1-1--1920x1080.jpg",
  "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65c1ea3cb7875674a09a3ba1/fashion-banner-for-home-page2-1-1--1920x1080.jpg",
  "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65c1e9f15bf1ac7441401dc1/nccf-banner-1--1920x1080.jpg"
];

function Horizonslider() {
  return (
    <div className="container-fluid myslider">
      <div
        id="carouselExample"
        className="carousel slide p-1"
        style={{
          width: '100%',
          margin: 'auto',
          marginTop:'18%',
          overflow: 'hidden',
          background:
            'linear-gradient(to bottom, rgba(210, 208, 255, 2), rgba(210, 208, 255, 0.8))',
        }}
        data-bs-ride="carousel"
        data-bs-interval="3000" // Set the sliding time to 3 seconds per image (3000 milliseconds)
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
              <img
                src={image}
                className="dummy-img d-block w-100 h-100 p-1"
                alt={`Hori image ${index + 1}`}
                style={{
                  objectFit: 'cover', // Ensure the image covers the entire container
                  transition: 'transform 3s ease-in-out', // Set the transition time to 3 seconds
                }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Horizonslider;
