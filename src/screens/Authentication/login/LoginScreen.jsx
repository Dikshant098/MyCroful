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
    <div class='login' style={{
      background: "linear-gradient(to top, rgba(0,128,128, 1), rgba(0, 0, 0, 0))"
    }}>
      <div className="container">
        <ToastContainer />
        <div className="card rounded-top-5" style={{
          background: "linear-gradient(to bottom, rgba(102,178,178, 0.9), rgba(0, 0, 0, 0))"
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
  )
}

export default LoginScreen