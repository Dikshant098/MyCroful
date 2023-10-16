import React from 'react'
import '../header/header.scss'

const Header = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <div className='title'>
          Croful
        </div>
        <div className='d-flex gap-3'>
          <div>Home</div>
          <div>Navratri Special</div>
          <div>Diwali Special</div>
        </div>
        <div className='d-flex'>
          <div>Sign In</div>
          <div>Cart</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className=' p-2'>
            <li className="nav-item list-unstyled ">
              <a className="nav-link dropdown-toggle text-center text-white bg-black " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu ">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </div>
        </div>
        <div className="col-lg-8">
          <div className='d-flex'>
            <div className="input-group mb-3">
              <input type="search" placeholder='Search for Products' className="form-control" aria-label="Text input with dropdown button" />
              <button className="btn btn-outline-dark bg-black text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div>
              <form className="d-flex">
                <button className="btn btn-outline-success" type="submit"> Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header