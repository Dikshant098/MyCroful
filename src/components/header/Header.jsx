import axios from 'axios';
import React, { useEffect, useState } from "react";
import "../header/header.scss";
import { AiOutlineUser } from "react-icons/ai";
import { searchProduct, searchCategory } from "../../redux/search/searchAction";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenuFold } from "react-icons/ai";
import Sidebar from "../dashboard/sidebar/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Location from "../Location/Location";
import { useDispatch, useSelector } from "react-redux";
import { getLocationDetails } from '../../redux/location/locationAction';
import { GrLocation } from 'react-icons/gr';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');

</style>
const Header = () => {
  // const axios = require('axios')
  const firebaseURl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/'
  const { BASE_URL } = require('../../constants/baseUrl')
  const [search, setSearch] = useState();
  const [searchListData, setSearchListData] = useState([]);
  const [searchByCategory, setSearchByCategory] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const locationReducerResponse = useSelector((state) => state.locationReducer);
  const { loading, success, payload } = locationReducerResponse;
  const [category, setCategory] = useState(true)

  const params = useParams()

  useEffect(() => {
    // const id = params?.id
    if (params?.id == 'true') {
      setCategory(false)
    } else {
      setCategory(true)
    }
  }, [params])


  // const [searchData, setSearchData] = useState()

  // const searchResponse = useSelector((state) => state.searchReducer);
  // const { loading, success, payload } = searchResponse;
  // setSearchData(payload);

  useEffect(() => {
    // console.log(BASE_URL);
    searchList()

  }, [search])

  useEffect(() => {
    dispatch(getLocationDetails())
  }, [])

  useDispatch(() => {
    console.log(payload);
  }, [success])


  const searchList = async () => {
    try {
      if (search) {
        const url = BASE_URL + 'search/searchList/' + search
        const response = await axios.get(url);
        // setData(response.data);
        setSearchListData(response.data)
        console.log("searchListData===>", searchListData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    };
  }

  const searchHandler = (id) => {
    navigate('/dashboard/productShopDetails/' + id)
    setSearchListData(null)
    setSearch('')
  }

  const searchCategoryHandler = (value) => {
    // setSearchByCategory(value)
    dispatch(searchCategory(value))
    navigate('/dashboard/productListCategory/' + value)
  }

  const logOutHandler = () => {
    navigate('/login')
    localStorage.setItem('Croful', '')
  }

  return (
    <div className="container header mx-0 ps-0 bg-white shadow pt-0 pb-0 mb-0 bg-body-tertiary" style={{ maxWidth: "100vw", background: "linear-gradient(to top, rgba(255, 215, 0, 0.4), rgba(225, 175, 209,1))" }}>
      <div className="d-flex justify-content-between m-1 mb-0 align-items-center">
        <Link
          to='/dashboard/Home'
          className="fw-semibold" style={{ fontFamily: 'Roboto Slab', textDecoration: "none", color: 'rgb(0,102,102)', fontSize: '50px' }}>Croful</Link>
        <div className="d-flex">
          <Location />
        </div>
        <div className="d-flex">
          <div className="container mt-0">
            <div className="row justify-content-center">
              <div style={{ width: "45vw" }}>
                <div className="input-group rounded-pill">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="What are you looking for ?"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ border: "1px solid gray", marginRight: "3px", background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0))" }}
                  />
                  <div className="rounded-2 ps-2" style={{
                    overflowY: 'auto', /* Change from 'scroll' to 'auto' */
                    width: '41vw',
                    position: 'absolute',
                    left: '15px',
                    top: '45px',
                    border: 'none',
                    maxHeight: '50vh',
                    background: 'rgb(250,250,250)',
                    boxShadow: '10px 10px 30px rgba(0,0,0,0.5)',
                    scrollbarWidth: 'thin', /* For Firefox */
                    scrollbarColor: 'transparent transparent' /* For Firefox */
                  }}>
                    {
                      Array.isArray(searchListData) &&
                      searchListData.map((s, key) => (

                        search ? <div className="d-flex p-2 searchList" onClick={() => searchHandler(s._id)}>
                          <div>
                            <img src={firebaseURl + s?.logo} className='rounded-2' width={'50px'} alt="" />
                          </div>
                          <div className='ps-3'>
                            <div className="dropdown-item " href="#" key={key}>{s.title}  </div>

                            <div style={{ fontSize: '13px' }} className='text-secondary'> Seller |<span className='text-success fw-bold'>{s?.is_deliverable ? <span className='text-success ps-2'>Deliverable</span> : <span className='ps-2 text-danger'>Non-Deliverable</span>}</span></div>

                            {/* <span className='text-success'>{s?.is_open ? <span className='text-success'>Open </span> : <span className='text-danger'>Closed </span>}</span> */}

                          </div>
                          <div className='ms-auto'>
                            <span className='text-success pe-4'>{s?.address?.slice(0, 9)}  <GrLocation className="gap-5 me-2" style={{ fontSize: '25px', fontWeight: '400' }} /></span>
                          </div>
                        </div> : ""
                      ))
                    }
                  </div>


                  {/* <Link to={'/dashboard/productListCategory/' + search} onClick={searchHandler} className="btn btn-outline-secondary rounded-pill" type="button" id="search-addon">
                    <CiSearch className="gap-1"
                      style={{ fontSize: "28px" }} />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <div className="fw-bold d-flex">
            <button className="text-decoration-none btn fw-bold text-dark" onClick={logOutHandler} >
              <AiOutlineUser
                className="gap-1"
                style={{ fontSize: "28px" }}
              />
              Log Out
            </button>
          </div>

          <div className="fw-bold d-flex">
            <div id="Profile" className="text-decoration-none right-2 text-dark" >
              <AiOutlineMenuFold className="gap-2" style={{ fontSize: "28px" }} />
              Profile
            </div>
          </div>

          <div className="fw-bold d-flex gap-1">
            <Link to="/dashboard/cart/cart" className="text-decoration-none text-dark">
              <HiOutlineShoppingBag
                className="gap-1"
                style={{ fontSize: "28px" }}
              />
              Cart
            </Link>
          </div>
        </div>
      </div>
      {
        category ?
          <div className="row" >
            <div className="d-flex align-items-center justify-content-center" style={{ cursor: "pointer" }}>
              <div className="pt-2 pb-0">
                <li className="d-flex mt-1">
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='fashion' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Fashion.svg" className="img-fluid category-icon" id="fashion" onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Fashion
                  </ul>
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='fruits-and-vegetables' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Grocery.svg" class="img-fluid category-icon" id='fruits-and-vegetables' onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Grocery
                  </ul>
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='inverter-and-stabilizer&filters' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Electronics.svg" class="img-fluid category-icon" id='inverter-and-stabilizer&filters' onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Electronics
                  </ul>
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='food-and-beverages' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Food-Beverages.svg" class="img-fluid category-icon" id='food-and-beverages' onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Food & Beverages
                  </ul>
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='storage-and-organisation&filters' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Home-Decor.svg" class="img-fluid category-icon" id='storage-and-organisation&filters' onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Home & Decor
                  </ul>
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='health-devices&filters' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Beauty-Personal-Care.svg" class="img-fluid category-icon" id='health-devices&filters' onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Beauty & Personal Care
                  </ul>
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='automotive&filters ' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Automotive.svg" class="img-fluid category-icon" id='automotive&filters ' onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Automotive
                  </ul>
                  <ul className="fw-semibold d-flex flex-column justify-content-center align-items-center" id='health-and-wellness&filters' onClick={(e) => searchCategoryHandler(e.target.id)}>
                    <div className="icon-cont shadow rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: '80px', height: '80px', padding: '11px', backgroundColor: 'rgb(255, 230, 230)' }}>
                      <img loading="lazy" onerror="ms._imageError(this)" src="//d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Health-Wellness.svg" class="img-fluid category-icon" id='health-and-wellness&filters' onClick={(e) => searchCategoryHandler(e.target.id)} />
                    </div>
                    Health & Wellness
                  </ul>
                  {/* <ul className="fw-semibold" onClick={searchList}>
                clickkkkkkkk
              </ul> */}
                </li>
              </div>
            </div>
          </div> : ''
      }

      <Sidebar />
    </div>
  );
};

export default Header;


