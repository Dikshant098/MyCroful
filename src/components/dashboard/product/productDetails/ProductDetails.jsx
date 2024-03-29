import React, { useEffect, useState } from 'react'
import '../productDetails/ProductDetails.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../../../redux/productDetails/productDetailsAction'
import { BASE_URL } from '../../../../constants/baseUrl'
import axios from 'axios'
import Madhuri from '../../../../assets/images/Products/Yeola-Meenakari-Kalanjali-Paithani-scaled.jpeg'
import one from '../../../../assets/images/sarees/saree-1.jpeg';
import two from '../../../../assets/images/sarees/saree-2.jpeg';
import three from '../../../../assets/images/sarees/saree-3.jpeg';
import four from '../../../../assets/images/sarees/saree-4.jpeg';
import five from '../../../../assets/images/sarees/saree-5.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const firebaseURl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/'

function ProductDetails() {
  const param = useParams();
  const dispatch = useDispatch()
  const productDetailsResponse = useSelector((state) => state.productDetailsReducer);
  const { loading, success, payload } = productDetailsResponse;
  const [productDetails, setProductDetails] = useState({})
  const [imgUrl, setImgUrl] = useState('');
  const [prodName, setProdName] = useState('');

  useEffect(() => {
    getProdDetailsByAlias(param?.alias)
  }, [param])


  const getProdDetailsByAlias = async (alias) => {
    const { data } = await axios.get(BASE_URL + 'search/getProductDetailsAlias/' + alias);
    setProductDetails(...data.data);
  };

  useEffect(() => {
  }, [productDetails])

  const firstSetCardData = [
    { title: 'Card 1', text: 'Some quick example text for Card 1.', img: one },
    { title: 'Card 2', text: 'Some quick example text for Card 2.', img: two },
    { title: 'Card 3', text: 'Some quick example text for Card 3.', img: three },
    { title: 'Card 4', text: 'Some quick example text for Card 4.', img: four },
    { title: 'Card 5', text: 'Some quick example text for Card 5.', img: five },
  ];

  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = async (p, imgUrl) => {
    // dispatch(getProductDetails(id))
    // navigate('/dashboard/cart/cart/' + alias)
    const userId = localStorage.getItem('Croful')
    console.log(userId);
    let obj = {
      productName: p.name,
      price: p.price,
      quantity: count,
      userId: userId,
      img: imgUrl,
      cId: p._id,
    }
    try {
      const url = BASE_URL + 'cart/addToCart'
      const data = await axios.post(url, obj)
      if (data) {
        toast.success("Product successfully added !!", {
          autoClose: 1000,
        })
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container mt-5">
      <ToastContainer />
        {/* <h2 className='d-flex justify-content-center'>{productDetails.category}</h2> */}
        <div className="row">
          {/* Left Section - Image */}
          <div className="container col-md-6 d-flex justify-content-center align-items-center" style={{marginTop:'83px'}}>
            <img
              src={productDetails?.images ? firebaseURl + productDetails?.images[0]?.image : "#"}
              alt="Placeholder Image"
              className="img-fluid mx-auto"
              style={{ objectPosition: 'center' }}
            />
          </div>

          {/* Right Section - Description */}
          <div className="col-md-6" style={{marginTop:'83px'}}>
            <div className="card" style={{ border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title h4">{productDetails?.name}</h5>
                <p className="card-text">
                  <span className='fw-semibold fs-4'>₹ {productDetails?.price} </span>
                </p>
                <p className="card-text">
                  <span className='fw-semibold'>Sold By : </span>{productDetails?.seller_name}
                </p>

                {/* Counting box */}
                <div className='d-flex flex-row ' style={{}}>
                  <div className='rounded-5' style={{ width: '120px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <button className='d-flex align-items-center justify-content-center' onClick={decreaseCount} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }} >-</button>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{count}</span>
                      <button className='d-flex align-items-center justify-content-center' onClick={increaseCount} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }} >+</button>
                    </div>
                  </div>
                  <button className='btn btn-dark ms-3 fw-bold rounded-5' style={{ width: '10vw', backgroundColor:'rgb(0,128,128)' }} onClick={() => addToCart(productDetails, firebaseURl + productDetails?.images[0]?.image)}> Add to Cart</button>
                </div>

                {/* Accordian with three sections */}
                <div className="accordion accordion-flush mt-5"  id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header fw-swmibold"> 
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Product Details
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <p>country of Origin : {productDetails?.country_of_origin}</p>
                        <p>Net Quantity : {productDetails?.net_quantity}</p>
                        {/* <p>Contact Details Consumer Care : </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header fw-swmibold">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Product Description
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">{productDetails?.description}</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header fw-swmibold">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Vendor Details
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Sold By : {productDetails?.seller_name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className='mt-5'>
          <div className='h3 d-flex justify-content-center'>Other Products from Sellers</div>
          <div className='d-flex justify-content-around mt-5'>
            {firstSetCardData.map((card, index) => (
              <div key={index} className='card' style={{
                width: '180px', boxShadow: '2px 0px 10px rgba(210, 208, 255, 1)', minHeight: '350px',
                position: 'relative'
              }}>
                <img src={card.img} className='card-img-top' alt={`Card ${index + 1}`} />
                <div className='card-body' style={{ height: '120px' }}>
                  <h5 className='card-title'>{card.title}</h5>
                  <p className='card-text'>{card.text}</p>
                  <a href='#' className='btn fw-semibold rounded-5' style={{ border: '1px solid black',backgroundColor:'rgb(0,128,128)', color:'white' }}>
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description Of Product */}

      </div>
    </div>
  )
}

export default ProductDetails
