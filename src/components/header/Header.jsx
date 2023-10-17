import React from 'react'
import '../header/header.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <div className='container mx-0 ps-0' style={{maxWidth:'100vw'}} >
      <div className='d-flex justify-content-between m-2 align-items-center'>
        <div className='h2'>
          Croful
        </div>
        <div className='d-flex gap-5'>
          <a href='#' className='text-decoration-none text-dark'>Home</a>
          <a href='#' className='text-decoration-none text-dark'>Navratri Special</a>
          <a href='#' className='text-decoration-none text-dark'>Diwali Special</a>
        </div>
        <div className='d-flex gap-4'>
          <div className='fw-bold d-flex align-items-center gap-1'> <AiOutlineUser style={{fontSize:'25px'}}/> Sign In</div>
          <div className='fw-bold d-flex align-items-center gap-1'><HiOutlineShoppingBag style={{fontSize:'25px'}}/>Your Cart</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 align-items-center">
          <div className='p-2'>
            <li className="nav-item list-unstyled">
              <a className="nav-link text-center text-white bg-black p-2 rounded-top d-flex align-items-center justify-content-center gap-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <RxHamburgerMenu style={{fontSize:'25px'}} />Browse Category
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
        <div className="col-lg-8 align-items-center p-2">
          <div className='d-flex'>
            <div className="input-group mb-3">
              <input type="search" placeholder='Search for Products' className="form-control rounded-0" aria-label="Text input with dropdown button" />
              <button className="btn btn-secondary bg-white text-black rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
              <ul className="dropdown-menu dropdown-menu-center">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div>
              <form className="d-flex">
                <button className="btn bg-black text-white rounded-0" type="submit"> Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Header;
