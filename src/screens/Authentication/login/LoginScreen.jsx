import React from 'react'
import '../login/loginScreen.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Ubuntu:wght@300&display=swap');
</style>

const LoginScreen = () => {

  // const [bgColor, setBgColor] = useState(true);
  // const [numberArray, setNumberArray] = useState([4, 6, 7, 7]);
  // const [click, setClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const submitHandler = () => {
    console.log(email, password);
    if (true) {

      navigate("/dashboard/Home");
    }
  }

  useEffect(() => {

  })

  // const printList = () => {
  //   setClick(!click)
  // }

  // const onClick = () => {
  //   setBgColor(!bgColor)
  // }

  return (
    <div class='login' style={{
      background: "linear-gradient(to top, rgba(195, 192, 255, 1), rgba(0, 0, 0, 0))"
    }}>
      <div className="container">
        <div className="card rounded-top-5" style={{
          background: "linear-gradient(to bottom, rgba(220, 221, 222, 0.9), rgba(0, 0, 0, 0))"
        }}>
          <div className="card-body paddingTopBottom px-5" style={{ paddingTop: "40px", paddingBottom: "50px" }}>
            <div className='d-flex flex-column align-items-center '>
              <div className='fw-bold h1' style={{ fontFamily: "Ubuntu", textDecoration: "none", textShadow: "4px 0 4px rgba(255, 255, 255, 0.7)" }}>Croful</div>
              <div className='fw-semibold h4' style={{ fontFamily: "Ubuntu", textDecoration: "none" }}>Please enter your details</div>
            </div>
            <div>
              <div className='my-2'>
                <label className='mb-1 fw-semibold' htmlFor="mobile">Mobile Number</label>
                <input type="email" className='form-control' value={email} placeholder='Enter Mobile Number' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='d-grid mb-2'>
                <button className='btn btn-dark' onClick={submitHandler}>Send OTP</button>
              </div>
              <div className='mt-3'>
                <label className='mb-1 fw-semibold' htmlFor="otp">Enter OTP</label>
                <input type="password" className='form-control' placeholder='Enter OTP' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='d-grid mt-2'>
                <button className='btn btn-dark' onClick={submitHandler}>Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default LoginScreen