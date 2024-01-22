import React from 'react';
import one from '../../../assets/images/sarees/saree-1.jpeg';
import two from '../../../assets/images/sarees/saree-2.jpeg';
import three from '../../../assets/images/sarees/saree-3.jpeg';
import four from '../../../assets/images/sarees/saree-4.jpeg';
import five from '../../../assets/images/sarees/saree-5.jpeg';
import six from '../../../assets/images/sarees/saree-6.jpeg';
import seven from '../../../assets/images/sarees/saree-7.jpeg';
import eight from '../../../assets/images/sarees/saree-8.jpeg';
import nine from '../../../assets/images/sarees/saree-9.jpeg';
import ten from '../../../assets/images/sarees/jewellery-1.jpeg';

function Collections() {
  const firstSetCardData = [
    { title: 'Card 1', text: 'Some quick example text for Card 1.', img: one },
    { title: 'Card 2', text: 'Some quick example text for Card 2.', img: two },
    { title: 'Card 3', text: 'Some quick example text for Card 3.', img: three },
    { title: 'Card 4', text: 'Some quick example text for Card 4.', img: four },
    { title: 'Card 5', text: 'Some quick example text for Card 5.', img: five },
  ];

  const secondSetCardData = [
    { title: 'Card A', text: 'Some quick example text for Card A.', img: six },
    { title: 'Card B', text: 'Some quick example text for Card B.', img: seven },
    { title: 'Card C', text: 'Some quick example text for Card C.', img: eight },
    { title: 'Card D', text: 'Some quick example text for Card D.', img: nine },
    { title: 'Card E', text: 'Some quick example text for Card E.', img: ten },
  ];

  return (
    <div className='container-fluid mt-5'>
      {/* First Set of Collections */}
      <div className='h1 d-flex justify-content-center'>New Collections</div>
      <div className='d-flex justify-content-around mt-5'>
        {firstSetCardData.map((card, index) => (
          <div key={index} className='card' style={{ width: '180px', border: 'none', boxShadow: '2px 0px 10px rgba(152, 210, 236, 1)' }}>
            <img src={card.img} className='card-img-top' alt={`Card ${index + 1}`} />
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.text}</p>
              <a href='#' className='btn fw-semibold' style={{ border: '2px solid black', background: 'linear-gradient(to bottom, rgba(152, 210, 236, 1), rgba(0, 0, 0, 0))' }}>
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second Set of Collections */}
      <div className='h1 d-flex justify-content-center mt-5'>Popular Collections</div>
      <div className='d-flex justify-content-around mt-5'>
        {secondSetCardData.map((card, index) => (
          <div key={index} className='card' style={{ width: '180px', border: 'none', boxShadow: '2px 0px 10px linear-gradient(to top, rgba(152, 210, 236, 1), rgba(0, 0, 0, 0))' }}>
            <img src={card.img} className='card-img-top' alt={`Card ${index + 6}`} />
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.text}</p>
              <a href='#' className='btn fw-semibold' style={{ border: '2px solid black', background: 'linear-gradient(to bottom, rgba(152, 210, 236, 1), rgba(0, 0, 0, 0))' }}>
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
