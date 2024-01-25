import React from 'react';
import '../slider/horizonslider.scss';

const images = [
  require('../../../assets/images/Hori image 4.jpg'),
  require('../../../assets/images/Hori image 2.jpg'),
  require('../../../assets/images/Hori image 5.jpg'),
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
                className="dummy-img d-block"
                alt={`Hori image ${index + 1}`}
                style={{
                  objectFit: 'cover', // Ensure the image covers the entire container
                  width: '100%',
                  height: '70vh',
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
