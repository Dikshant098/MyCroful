import React from 'react'
import dummy from '../../../assets/images/Hori image 4.jpg'
import dummy2 from '../../../assets/images/Hori image 2.jpg'
import dummy3 from '../../../assets/images/Hori image 5.jpg'
import "../slider/horizonslider.scss";

function Horizonslider() {
  return (
    <div className="container myslider">
      <div id="carouselExample" className="carousel slide bg-black p-2" style={{width:"100%", margin:"auto", overflow:"hidden"}}>
        <div className="carousel-inner d-flex">
          <div className="carousel-item active">
            <img src={dummy} className="dummy-img d-block " alt="..." style={{backgroundSize:"cover", width:"100%", height:"300px"}} />
          </div>
          <div className="carousel-item">
            <img src={dummy2} className="dummy-img d-block" alt="..." style={{backgroundSize:"cover", width:"100%", height:"300px"}} />
          </div>
          <div className="carousel-item">
            <img src={dummy3} className="dummy-img d-block" alt="..." style={{backgroundSize:"cover", width:"100%", height:"300px"}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Horizonslider
