import React, { useEffect, useState } from 'react';
import '../productListCategory/ProductListCategory.scss';
import dummyImg from '../../../../assets/images/dummy_img.jpg';
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../../../../redux/search/searchAction';
import { getProductDetails } from '../../../../redux/productDetails/productDetailsAction';
import axios from 'axios';
import { BASE_URL } from '../../../../constants/baseUrl';

const ProductListCategory = () => {
  const [productList, setProductList] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true); // State to track image loading
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchResponse = useSelector((state) => state.searchReducer);
  const { loading, success, payload } = searchResponse;

  useEffect(() => {
    if (payload) {
      setProductList(payload);
      setLoadingImages(false); // Once payload is received, set loadingImages to false
    }
  }, [payload]);

  useEffect(() => {
    setProductList(payload?.data);
  }, [payload]);

  const imgUrl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/';

  const addToCart = async (p, imgUrl) => {
    const userId = localStorage.getItem('Croful');
    let obj = {
      productName: p.name,
      price: p.price,
      quantity: 1,
      userId: userId,
      img: imgUrl,
      cId: p._id,
    };
    try {
      const url = BASE_URL + 'cart/addToCart';
      const data = await axios.post(url, obj);
      if (data) {
        alert('Product added successfully !!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductDetails = (alias) => {
    navigate('/dashboard/productDetails/' + alias);
  };

  return (
    <div className='product_list my-3'>
      <div className='container'  style={{marginTop:'17%'}}>
        <div className='row'>
          {loadingImages ? ( // Render a loader while images are loading
            <div className='loader'>Loading...</div>
          ) : (
            productList?.map((p) => (
              <div className='col-lg-3 col-md-6 my-3 card border-0' key={p._id}>
                <div className='card-body p-1 border border-1'>
                  <div className='product_card rounded-0'>
                    <div
                      className='product_card_body'
                      onClick={() => handleProductDetails(p.alias)}
                    >
                      <div className='img_box'>
                        <img
                          src={imgUrl + p?.images[0]?.image}
                          className='product_img'
                          alt=''
                          onLoad={() => setLoadingImages(false)} // Once an image is loaded, set loadingImages to false
                        />
                      </div>
                      <div className='py-2 px-2'>
                        <div className='fw-bold product_title'>
                          {p.name.length < 55 ? p.name : p.name.slice(0, 53) + '....'}
                        </div>
                        <div className='seller_name'>Seller -{p.seller_name}</div>
                        <div className='prize'>₹{p.price}</div>
                      </div>
                    </div>
                    <div className='product_card_footer d-grid p-2 add_to_cart '>
                      <button
                        type='submit'
                        className='btn btn-dark rounded-0 add_to_Cart'
                        onClick={() => addToCart(p, imgUrl + p.images[0].image)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListCategory;
