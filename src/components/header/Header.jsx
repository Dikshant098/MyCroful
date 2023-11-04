import React, { useEffect, useState } from "react";
import "../header/header.scss";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
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
  // const dispatch = useDispatch()
  // const [searchData, setSearchData] = useState()

  // const searchResponse = useSelector((state) => state.searchReducer);
  // const { loading, success, payload } = searchResponse;
  // setSearchData(payload);
  

  // const getOrder = useSelector((state) => state.getOrder)
  // const { loading, success, payload } = getOrder

  // useEffect(() => {
  //   dispatch(searchProduct(search));
  // }, [dispatch]);
  // const navigation = useNavigate()

  // useEffect(() => {
  //   if (payload) {
  //     setSearchData(payload);
  //     // console.log(searchData);
  //   }
  // }, [])


  // const searchHandler = () => {
  //   dispatch(searchProduct(search))
  // }

  return (
    <div className="container header mx-0 ps-0 bg-white shadow p- pt-0 pb-0 mb-0 bg-body-tertiary rounded" style={{ maxWidth: "100vw" }}>
      <div className="d-flex justify-content-between m-2 align-items-center">
        <Link
          to='/dashboard/Home'
          className="h1" style={{ fontFamily: "Ubuntu", textDecoration: "none" }}>Croful</Link>
        <div className="d-flex">
          <Location />
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
              Your Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 align-items-center">
          <div className="p-2">
            <li className="nav-item list-unstyled">
              <a
                className="nav-link text-center text-white bg-black p-2 rounded-top d-flex align-items-center justify-content-center gap-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <RxHamburgerMenu style={{ fontSize: "25px" }} />
                Browse Category
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Food
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Wearabel
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
        <div className="col-lg-8 align-items-center p-2">
          <div className="d-flex">
            <div className="input-group mb-3">
              <input
                type="search"
                placeholder="Search for Products"
                className="form-control rounded-0"
                aria-label="Text input with dropdown button"
                onChange={(event) => {
                  setSearch(event.target.value)
                }}
                value={search}
              />
              <select name="product_cat" className="category-dropdown bg-black text-white ">
                <option value="">All Categories</option>
                <option value="banarasi-saree"> Banarasi Saree </option>
                <option value="banarasi-tissue-kota-check"> Banarasi Tissue kota check </option>
                <option value="cotton-saree"> Cotton Saree </option>
                <option value="cotton-silk-saree"> Cotton Silk Saree </option>
                <option value="diwali-special"> Diwali Special </option>
                <option value="earrings"> Earrings </option>
                <option value="elampillai-saree"> Elampillai-Saree </option>
                <option value="erkal-paithani"> Erkal Paithani </option>
                <option value="georgette-saree"> Georgette Saree </option>
                <option value="gown-set"> Gown Set </option>
                <option value="handloom-khadi-saree"> Handloom -Khadi Saree </option>
                <option value="ilkal-saree"> Ilkal Saree </option>
                <option value="jewellery-set"> Jewellery Set </option>
                <option value="kadiyal-paithani"> Kadiyal Paithani </option>
                <option value="kalanjali-paithani"> Kalanjali Paithani </option>
                <option value="kanjivarm-paithani"> Kanjivarm Paithani </option>
                <option value="khun-saree"> Khun Saree </option>
                <option value="kids"> Kids </option>
                <option value="kora-muslin"> Kora Muslin </option>
                <option value="kurta-set"> Kurta Set </option>
                <option value="lahenga-choli"> Lahenga Choli </option>
                <option value="linen-saree"> Linen Saree </option>
                <option value="muniya-paithani"> Muniya paithani </option>
                <option value="narayan-peth-paithani"> Narayan Peth Paithani </option>
                <option value="navratri-special"> Navratri Special </option>
                <option value="neckless-chains"> Neckless &amp; Chains </option>
                <option value="new-arrivals"> New Arrivals </option>
                <option value="new-peacock-gadwal-paithani"> New Peacock Gadwal Paithani </option>
                <option value="paithani"> Paithani </option>
                <option value="readymade-saree-sarees"> Readymade Saree </option>
                <option value="sarees"> Sarees </option>
                <option value="sharara-suit"> Sharara Suit </option>
                <option value="silk-saree"> Silk Saree </option>
                <option value="soft-silk"> Soft Silk </option>
                <option value="tissue-silk-sarees"> Tissue Silk Sarees </option>
                <option value="tripal-muniya-paithani"> Tripal Muniya Paithani </option>
                <option value="women-ethnic"> Women Ethnic </option>
                <option value="uncategorized"> Uncategorized </option>
                <option value="women"> Women </option>
                <option value="jewellery"> Jewellery </option>
              </select>
            </div>
            <div>
              <form className="d-flex">
                <Link
                  to={"/dashboard/productlist/"+search} 
                  className="btn bg-black text-white rounded-0"
                  type="submit"
                  // onClick={searchHandler}
                >
                  Search
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Header;


