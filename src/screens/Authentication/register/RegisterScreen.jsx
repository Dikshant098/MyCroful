import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../register/registerScreen.scss'

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const signUp = () => {
    console.log(name, email, number, password);
    if (true) {

      navigate("/dashboard");
    }
  }



  return (
    <div class='register'>
      <div className="container">
        <div className="card rounded-0">
          <div className="card-body paddingTopBottom px-5">
            <div className='d-flex flex-column align-items-center '>
              <div className='fw-bold h2'>Croful</div>
              <div className='fw-bold mt-1'>Welcome Back</div>
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



