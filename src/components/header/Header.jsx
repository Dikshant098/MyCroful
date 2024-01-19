import React, { useEffect, useState } from "react";
import "../header/header.scss";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenuFold } from "react-icons/ai";
import Sidebar from "../dashboard/sidebar/Sidebar";
import { Link } from "react-router-dom";
import Location from "../Location/Location";
import { searchProduct, searchCategory } from "../../redux/search/searchAction";
import { useDispatch, useSelector } from "react-redux";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Ubuntu:wght@300&display=swap');
</style>

const Header = () => {

  const [search, setSearch] = useState();
  const [searchByCategory, setSearchByCategory] = useState();
  const dispatch = useDispatch()
  // const [searchData, setSearchData] = useState()

  // const searchResponse = useSelector((state) => state.searchReducer);
  // const { loading, success, payload } = searchResponse;
  // setSearchData(payload);



  const searchHandler = () => {
    setSearch()
    dispatch(searchProduct(search))
  }

  const searchCategoryHandler = (value) => {
    setSearchByCategory(value)
    dispatch(searchCategory(value))


  }



  return (
    <div className="container header mx-0 ps-0 bg-white shadow pt-0 pb-0 mb-0 bg-body-tertiary rounded" style={{ maxWidth: "100vw", background: "linear-gradient(to bottom, rgba(210, 208, 255, 1), rgba(0, 0, 0, 0))" }}>
      <div className="d-flex justify-content-between m-2 align-items-center">
        <Link
          to='/dashboard/Home'
          className="h1" style={{ fontFamily: "Ubuntu", textDecoration: "none" }}>Croful</Link>
        <div className="d-flex">
          <Location />
        </div>
        <div className="d-flex">
          <div className="container mt-0">
            <div className="row justify-content-center">
              <div style={{ width: "50vw" }}>
                <div className="input-group rounded-pill">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="search-addon"
                    style={{ border: "1px solid gray" }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Link to={'/dashboard/productList/' + search} onClick={searchHandler} className="btn btn-outline-secondary rounded-pill" type="button" id="search-addon">
                    <CiSearch className="gap-1"
                      style={{ fontSize: "28px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <div className="fw-bold d-flex">
            <Link to="/login" className="text-decoration-none text-dark" >
              <AiOutlineUser
                className="gap-1"
                style={{ fontSize: "28px" }}
              />
              Login
            </Link>
          </div>

          <div className="fw-bold d-flex">
            <div id="Profile" className="text-decoration-none right-2 text-dark" >
              <AiOutlineMenuFold className="gap-2" style={{ fontSize: "28px" }} />
              Profile
            </div>
          </div>

          <div className="fw-bold d-flex gap-1">
            <Link to="/dashboard/productDetails" className="text-decoration-none text-dark">
              <HiOutlineShoppingBag
                className="gap-1"
                style={{ fontSize: "28px" }}
              />
              Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2">
            <li className="d-flex">
              <ul className="fw-semibold" id='fashion' onClick={(e) => searchCategoryHandler(e.target.id)}>
                Fashion
              </ul>
              <ul className="fw-semibold" id='fruits-and-vegetables' onClick={(e) => searchCategoryHandler(e.target.id)}>
                Grocery
              </ul>
              <ul className="fw-semibold" id='inverter-and-stabilizer&filters' onClick={(e) => searchCategoryHandler(e.target.id)}>
                Electronics
              </ul>
              <ul className="fw-semibold" id='food-and-beverages' onClick={(e) => searchCategoryHandler(e.target.id)}>
                Food & Beverages
              </ul>
              <ul className="fw-semibold"  id='storage-and-organisation&filters' onClick={(e) => searchCategoryHandler(e.target.id)}>
                Home & Decor
              </ul>
              <ul className="fw-semibold" id='health-devices&filters'onClick={(e) => searchCategoryHandler(e.target.id)}>
                Beauty & Personal Care
              </ul>
              <ul className="fw-semibold" id='automotive&filters 'onClick={(e) => searchCategoryHandler(e.target.id)}>
                Automotive
              </ul>
              <ul className="fw-semibold" id='health-and-wellness&filters'onClick={(e) => searchCategoryHandler(e.target.id)}>
                Health & Wellness
              </ul>
            </li>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Header;


