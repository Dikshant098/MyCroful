import React from 'react'
import '../login/loginScreen.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../constants/baseUrl';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Ubuntu:wght@300&display=swap');
</style>

const LoginScreen = () => {

  // const [bgColor, setBgColor] = useState(true);
  // const [numberArray, setNumberArray] = useState([4, 6, 7, 7]);
  // const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [otp, setOtp] = useState(null);

  const navigate = useNavigate()

  // const submitHandler = () => {
  //   console.log(email, password);
  //   if (true) {

  //     navigate("/dashboard");
  //   }
  // }

  useEffect(() => {

  })

  // const printList = () => {
  //   setClick(!click)
  // }

  // const onClick = () => {
  //   setBgColor(!bgColor)p
  // }


  const sendOtpHandler = async () => {
    if (!mobile) {
      alert("Plzz.. input Number")
      return
    }
    const url = BASE_URL + 'user/login'
    try {
      const obj = { mobile: mobile }
      const resp = await axios.post(url, obj)
      if (resp.data.status == 400) {
        alert("Invalid number")
        return
      }
      if(resp.data.success){
        alert('OTP successfully send !!')
      }

    } catch (error) {
      console.log(error);
      alert("Invalid number")
    }

  }
  const verifyOtpHandler = async () => {
    if (!otp) {
      alert("Plzz.. input your OTP")
      return

    }
    const url = BASE_URL + 'user/verifyUser'
    try {
      const obj = { userOTP: otp }
      const { data } = await axios.post(url, obj)
      console.log(data);
      if (data.success) {
        navigate("/dashboard/Home");
        // console.log(data);
        localStorage.setItem('Croful', data._id)
        alert('success done login !!')
        setOtp(null)
        setMobile(null)
      } else {
        alert('Invalid OTP')
      }

    } catch (error) {
      console.log(error);
      alert("Invalid OTP")
    }

  }



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
                <input type="number" className='form-control' value={mobile} placeholder='Enter Mobile Number' onChange={(e) => setMobile(e.target.value)} />
              </div>
              <div className='d-grid mb-2'>
                <button className='btn btn-dark' onClick={sendOtpHandler}>Send OTP</button>
              </div>
              <div className='mt-3'>
                <label className='mb-1 fw-semibold' htmlFor="otp">Enter OTP</label>
                <input type="number" className='form-control' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>
              <div className='d-grid mt-2'>
                <button className='btn btn-dark' onClick={verifyOtpHandler}>Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen