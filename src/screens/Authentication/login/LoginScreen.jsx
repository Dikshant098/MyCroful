import React from 'react'
import '../login/loginScreen.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../constants/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Ubuntu:wght@300&display=swap');
</style>

const LoginScreen = () => {

  // const [bgColor, setBgColor] = useState(true);
  // const [numberArray, setNumberArray] = useState([4, 6, 7, 7]);
  // const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [otp, setOtp] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const navigate = useNavigate()

  // const submitHandler = () => {
  //   console.log(email, password);
  //   if (true) {

  //     navigate("/dashboard");
  //   }
  // }

  useEffect(() => {

  })

  useEffect(() => {
    let timer;
    if (isButtonDisabled) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isButtonDisabled]);

  // const printList = () => {
  //   setClick(!click)
  // }

  // const onClick = () => {
  //   setBgColor(!bgColor)p
  // }


  const sendOtpHandler = async () => {
    if (!mobile) {
      toast.warn("Plzz.. Input Number", {
        autoClose: 1000,
      });
      return
    }
    const url = BASE_URL + 'user/login'
    try {
      const obj = { mobile: mobile }
      const resp = await axios.post(url, obj)
      if (resp.data.status == 400) {
        toast.error("Invalid number !", {
          autoClose: 1000,
        })
        return
      }
      if (resp.data.success) {
        setIsButtonDisabled(true);
        setTimeout(() => {
          setIsButtonDisabled(false);
          setCountdown(60);
        }, 60000);
        toast.success('OTP successfully send !!', {
          autoClose: 3000,

        })
      }

    } catch (error) {
      toast.error("Invalid number !", {
        autoClose: 1000,
      })
    }

  }
  const verifyOtpHandler = async () => {
    if (!otp) {
      toast.warn("Please input your OTP !", {
        autoClose: 1000,
      })
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
        toast.success("Successfully login !!", {
          autoClose: 1000,
        })
        setOtp(null)
        setMobile(null)
      } else {
        toast.error("Invalid OTP !!", {
          autoClose: 1000,
        })
      }

    } catch (error) {
      console.log(error);
      toast.error("Invalid OTP !!", {
        autoClose: 1000,
      })

    }

  }



  return (
    <div class='login' style={{ background: "linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0))" }}>
      <div className="container">
        <ToastContainer />
        <div className="card rounded-5 row d-flex justify-content-center align-items-center h-80" style={{
          background: "linear-gradient(to bottom, rgba(255, 215, 0, 0.4), rgba(225, 175, 209,0.8))",
          width: '60%',
          boxShadow: '0 0 30px rgba(0,0,0,0.2)' // adding shadow from right side
        }}>

          <div className="card-body px-5 d-flex align-items-center justify-content-between">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid mr-5" alt="Sample image" style={{ maxWidth: "50%", }} />
            <div>
              <div className='d-flex flex-column align-items-center '>
                <div className='fw-bold' style={{ fontFamily: "Ubuntu", textDecoration: "none", fontSize: '70px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Croful</div>
                <div className='fw-semibold h4' style={{ textDecoration: "none" }}>Please enter your details</div>
              </div>
              <div>
                <div className='my-2'>
                  <label className='mb-1 fw-semibold' htmlFor="mobile">Mobile Number</label>
                  <input
                    type="number"
                    className='form-control'
                    value={mobile}
                    placeholder='Enter Mobile Number'
                    onChange={(e) => setMobile(e.target.value)}
                    inputMode="numeric"
                  />

                </div>
                <div className='d-grid mb-2'>
                  {isButtonDisabled && (
                    <div className='text-sm text-success ms-auto'>
                      {countdown}s
                    </div>
                  )}
                  <button className='btn btn-dark' onClick={sendOtpHandler} disabled={isButtonDisabled}>Send OTP</button>
                </div>
                <div className='mt-3'>
                  <label className='mb-1 fw-semibold' htmlFor="otp">Enter OTP</label>
                  <input type="number" className='form-control' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} />
                </div>
                <div className='d-grid mt-2'>
                  <button className='btn btn-dark' onClick={verifyOtpHandler} disabled={!isButtonDisabled}>Sign in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen