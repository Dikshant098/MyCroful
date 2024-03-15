import React, { useEffect, useRef } from 'react';
import dummy from '../../../assets/images/dummy_img.jpg';
import { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import upi from '../../../assets/images/new upi.avif'
import { BASE_URL } from '../../../constants/baseUrl';
import axios from 'axios'
// import { jsPDF } from 'jspdf';
import { json, useNavigate } from 'react-router-dom';
import qr from '../../../assets/images/Products/images.png'

import ReactToPdf from 'react-to-pdf';
import { PDFViewer } from '@react-pdf/renderer';

import { FaRupiahSign } from "react-icons/fa6";
import { CiCreditCard1, CiBank, CiWallet } from "react-icons/ci";
import PDF from './PDF'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');

</style>


function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    townCity: '',
    state: '',
    pinCode: '',
    phone: '',
    email: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [formData2, setFormData2] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [cartDetails, setCartDetails] = useState([])
  const [total, setTotal] = useState(0)
  const [upi, setUPI] = useState('');

  const navigate = useNavigate()
  // const pdfRef = useRef(null);

  // const generatePDF = () => {
  //   const doc = new jsPDF();
  //   doc.text(20, 20, 'Billing Details:');
  //   // Add your form data to the PDF
  //   // Example:
  //   doc.text(20, 30, `First Name: ${formData.firstName}`);
  //   doc.text(20, 40, `Last Name: ${formData.lastName}`);
  //   // Add more fields as needed

  //   // Save the PDF to the ref
  //   pdfRef.current = doc;
  // };




  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form data submitted:', formData);
    goCheckout()
  };

  const goCheckout = () => {
    // console.log(formData);
    // console.log(upi);
    if (upi == '') {
      toast.error("Please enter UPI !!", {
        autoClose: 1000,
      })
      return
    } else {
      navigate('/invoiceDetails/' + JSON.stringify(formData))
    }
  }


  const handleCheckboxChange = () => {
    setIsChecked((prevValue) => !prevValue);
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  const getCartDetails = async () => {
    const userId = localStorage.getItem('Croful')
    const url = BASE_URL + '/cart/getCartDetails/' + userId
    try {
      const { data } = await axios.get(url)
      console.log(data);
      setCartDetails(data)
      let subtotal = 0;
      data.map(d => {
        subtotal = d.price + subtotal
      })
      setTotal(subtotal)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCartDetails()
  }, [])

  return (
    <div className='container'>
      <ToastContainer />
      <div className='h1 d-flex justify-content-center'>Checkout</div>
      <div className='row mt-5'>
        {/* Left Column */}
        <div className='col-md-6'>
          <div className='container'>
            <h2 className='mb-4'>Billing Details</h2>
            <form onSubmit={handleSubmit}>
              {/* ... (similar structure for other form fields) */}
              <div className="mb-3 row">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="companyName" className="form-label d-flex">
                  Company Name <span style={{ marginLeft: '6px' }}>(optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>



              <div className="col-md-12 mb-3">
                <label htmlFor="country" className="form-label d-flex">
                  Country / Region
                </label>
                <CountryDropdown
                  className="form-control"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={(value) => handleChange({ target: { name: 'country', value } })}
                  required
                />
              </div>

              <div className="col-md-12 mb-3">
                <label htmlFor="streetAddress" className="form-label d-flex">
                  Street address
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                  style={{ color: 'gray', fontSize: '15px' }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value='Apartment, suite, unit, etc. (optional)'
                  onChange={handleChange}
                  required
                  style={{ color: 'gray', fontSize: '15px' }}
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="townCity" className="form-label d-flex">
                  Town / City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="townCity"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="state" className="form-label d-flex">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="pinCode" className="form-label d-flex">
                  PIN code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="phone" className="form-label d-flex">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="email" className="form-label d-flex">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="button" style={{ width: '40%', backgroundColor: 'rgb(0,128,128)' }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Use this address
              </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className='col-md-6'>
          <div className='container'>
            <form onSubmit={handleSubmit}>
              <h1 className='mb-4 h2'>Ship to a Different Address</h1>
              {/* ... (similar structure for other form fields) */}

              <div className='mb-3'>
                <label className="form-check-label" >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span style={{ marginLeft: '6px' }}>Show Form</span>
                </label>
                {isChecked && (
                  <form onSubmit={handleSubmit2} className="mt-3">
                    <div className="mb-3 row">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="lastName" className="form-label d-flex">
                        Company Name <span style={{ marginLeft: '6px' }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="lastName" className="form-label d-flex">
                        Country / Region
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="lastName" className="form-label d-flex">
                        Street address
                      </label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="lastName"
                        name="lastName"
                        value='House Number and street name'
                        onChange={handleChange}
                        required
                        style={{ color: 'gray', fontSize: '15px' }}
                      />
                      {/* <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value='Apartment, suite, unit, etc. (optional)'
                        onChange={handleChange}
                        required
                        style={{ color: 'gray', fontSize: '15px' }}
                      /> */}
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="lastName" className="form-label d-flex">
                        Town / City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="lastName" className="form-label d-flex">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="lastName" className="form-label d-flex">
                        PIN code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="button" style={{ width: '40%', backgroundColor: 'rgb(0,128,128)' }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Use This Address
                    </button>
                  </form>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Modal box for prosceed to payment */}
        <div className='container-fluid mt-3 d-flex flex-column justify-content-center p-2' style={{ border: '1px solid black', width: '30%', borderRadius: '20px' }}>
          <div className="form-check mx-3 mb-3">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Digital Payments
            </label>
          </div>


          {/* New pop up modal for upi */}
          <div className="text-center"> {/* Added text-center class */}
            <button type="button" style={{ width: '40%', backgroundColor: 'rgb(0,128,128)' }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Placed Order
            </button>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ height: '100%' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-around" style={{ fontFamily: 'Roboto Slab', textDecoration: "none", background: "linear-gradient(to top, rgba(102,178,178, 1), rgba(0, 0, 0, 0))", width: '100%', color: 'rgb(0,102,102)' }}>
                <div className='container-fluid h1 fw-bold'>
                  Croful
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex flex-column align-items-center justify-content-around">
                {/* QR code section */}
                <div className='container-fluid d-flex flex-column align-items-center justify-content-around'>
                  <div className='h5 mb-3'>Pay with UPI QR</div>
                  <div className="mb-3 d-flex p-2" style={{ width: '90%', border: '1px solid gray', borderRadius: '8px' }}>
                    <img src={qr} style={{ width: '130px', marginRight: '10px' }} alt="QR Code" />
                    <span>Scan the QR using any UPI app on your phone.</span>
                  </div>

                  {/* Other UPI Options */}
                  <div className='h5 mb-3'>UPI, Cards & More</div>
                  <div className="card mb-3" style={{ width: '90%', minHeight: 'auto' }}>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <FaRupiahSign className='h3' style={{ marginRight: '10px' }} />
                        UPI / QR
                      </li>
                      <li className="list-group-item">
                        <CiCreditCard1 className='h3' style={{ marginRight: '10px' }} />
                        Card</li>
                      <li className="list-group-item">
                        <CiBank className='h3' style={{ marginRight: '10px' }} />
                        Netbanking</li>
                      <li className="list-group-item">
                        <CiWallet className='h3' style={{ marginRight: '10px' }} />
                        Wallet</li>
                    </ul>
                  </div>

                  {/* UPi Id section */}
                  <div className='d-flex justify-content-around' style={{ width: '90%' }}>
                    <div className="d-flex flex-column mr-3" style={{ flex: '1', marginRight: '40px' }}>
                      <span className='fw-bold h5'>Enter UPI ID</span>
                      <input className='mt-1' type="text" value={upi} onChange={(e) => setUPI(e.target.value)} name="" id="" placeholder='Enter Your UPI Id..' style={{ width: '100%', border: '1px solid gray', borderRadius: '5px', padding: '6px' }} />
                    </div>
                    <div className="ml-auto">
                      <img src={upi} style={{ width: '130px', marginRight: '0' }} alt="" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="modal-footer justify-content-around p-2" style={{ width: '100%' }}>
                <div className='h5'>Subtotal</div>
                <button onClick={goCheckout} type="button" className="btn btn-primary" style={{ backgroundColor: 'rgb(0,128,128)' }}>Verify & Pay</button>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default Checkout;
