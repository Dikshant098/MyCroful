import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../register/registerScreen.scss'
// import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/userAuthentication/userAuthenticationActions";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const RegisterScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const userRegister = useSelector((state) => state.userRegister);
  if (userRegister) {
    const { error, loading, payload, success } = userRegister;
  }

  const signUp = () => {
    console.log();
    const payload = { name, email, number, password }
    if (true) {
      // navigation.navigate('LoginVerificationScreen', {
      //   phone: phone
      // });
      //   const payload ={
      //     name: "harshal",
      //     email: "dsjhk ",
      //     number: "745",
      //     password: "k"
      // }
      dispatch(register(payload))
      navigate("/dashboard");
    }
  }

  // useEffect(() => {
  //   if (!loading && payload && success) {
  //     // navigation.navigate('LoginVerificationScreen', {
  //     //   phone: phone
  //     // });
  //     alert('Api done')
  //   }
  //   else if (error) {
  //     // console.warn(error.response.data.msg);

  //   }
  // }, [payload, loading, error, success])

  return (
    <div class='register'>
      <div className="container">
        <div className="card rounded-0">
          <div className="card-body paddingTopBottom px-5">
            <div className='d-flex flex-column align-items-center '>
              <div className='fw-bold h2'>Croful</div>
              <div className='fw-bold mt-1'>Welcome</div>
              <div>Please enter your details</div>
            </div>
            <div>
              <div className='my-2'>
                <label className='mb-1' htmlFor="email">Name</label>
                <input type="email" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
              </div>
              <div className='my-2'>
                <label className='mb-1' htmlFor="email">Email</label>
                <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' />
              </div>
              <div className='mt-2'>
                <label className='mb-1' htmlFor="Number">Contact Number</label>
                <input type="text" className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Enter your number' />
              </div>
              <div className='mt-2'>
                <label className='mb-1' htmlFor="password">Password</label>
                <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
              </div>

              {/* <div className='mt-2'>
                <label className='mb-1' htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className='form-control' placeholder='Confirm password' />
              </div> */}
              <div className='d-grid mt-2 mb-2'>
                <button className='btn btn-dark' onClick={signUp}>Sign up</button>
              </div>
              <div className='text-center'>
                Don't have an account? <span className='fw-bold text-decoration-underline register'>
                  <Link to="/login" className='text-dark'>Login</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen



