import React from 'react';
import dummy from '../../../assets/images/dummy_img.jpg';
import { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import upi from '../../../assets/images/new upi.avif'

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form data submitted:', formData);
  };


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

  return (
    <div className='container-fluid'>
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
                  value={formData.lastName}
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
              <div className="col-md-12 mb-3">
                <label htmlFor="lastName" className="form-label d-flex">
                  Phone
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
                  Email address
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
              <button type="submit" className="btn btn-primary">
                Checkout
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
                        value={formData.lastName}
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
                    <button type="submit" className="btn btn-primary">
                      Checkout
                    </button>
                  </form>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Modal box for prosceed to payment */}
        <div className='container-fluid mt-3 d-flex flex-column justify-content-center p-2' style={{ border: '1px solid black', width: '30%', borderRadius: '20px' }}>
          <div className="form-check mx-3">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Cash On Delivery
            </label>
          </div>
          <hr />
          <div className="form-check mx-3 mb-3">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              Pay via UPI
            </label>
          </div>

          {/* New pop up modal for upi */}
          <div className="text-center"> {/* Added text-center class */}
            <button type="button" style={{ width: '40%' }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Placed Order
            </button>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex flex-row align-items-center justify-content-around">
                <div className="d-flex flex-column">
                  <span className='fw-bold' style={{ fontSize: '22px' }}>Enter UPI ID</span>
                  <input className='mt-1' type="text" name="" id="" placeholder='Enter Your UPI Id..' style={{ width: '100%', border: '1px solid gray', borderRadius: '5px', padding:'6px'}} />
                </div>
                <div className="ml-auto">
                  <img src={upi} style={{ width: '130px', marginRight: '0' }} alt="" />
                </div>
              </div>

              <div className="modal-footer justify-content-center"> {/* Center the button */}
                <button type="button" className="btn btn-primary">Verify & Pay</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
