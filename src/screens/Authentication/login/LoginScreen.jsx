import React from 'react'
import '../login/loginScreen.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const LoginScreen = () => {

  const [bgColor, setBgColor] = useState(true);
  const [numberArray, setNumberArray] = useState([4, 6, 7, 7]);
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const submitHandler = () => {
    console.log(email, password);
    if (true) {

      navigate("/dashboard");
    }
  }

  useEffect(() => {

  })

  const printList = () => {
    setClick(!click)
  }

  const onClick = () => {
    setBgColor(!bgColor)
  }

  return (
    <div class='login'>
      <div className="container">
        <div className="card rounded-0">
          <div className="card-body paddingTopBottom px-5">
            <div className='d-flex flex-column align-items-center '>
              <div className='fw-bold'>Croful</div>
              <div className='fw-bold mt-1'>Welcome Back</div>
              <div>Please enter your details</div>
            </div>
            <div>
              <div className='my-2'>
                <label className='mb-1' htmlFor="email">Email</label>
                <input type="email" className='form-control' value={email} placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mt-2'>
                <label className='mb-1' htmlFor="password">Password</label>
                <input type="password" className='form-control' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='d-flex justify-content-end'>
                {/* <div>Remember me</div> */}
                <div className='fw-bold my-3 text-decoration-underline forgot_password'>Forgot password</div>
              </div>
              <div className='d-grid mb-2'>
                <button className='btn btn-dark' onClick={submitHandler}>Sign in</button>
              </div>
              <div className='text-center'>
                Don't have an account? <span className='fw-bold text-decoration-underline register'>
                  <Link to="/register" className='text-dark'>Register</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen