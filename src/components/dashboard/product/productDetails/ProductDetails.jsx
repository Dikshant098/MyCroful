import React, { useEffect, useState } from 'react'
import '../productDetails/ProductDetails.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../../../redux/productDetails/productDetailsAction'
import { BASE_URL } from '../../../../constants/baseUrl'
import axios from 'axios'


const ProductDetails = () => {
  const param = useParams();
  const dispatch = useDispatch()
  const productDetailsResponse = useSelector((state) => state.productDetailsReducer);
  const { loading, success, payload } = productDetailsResponse;
  const [productDetails, setProductDetails] = useState({})
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
    getProdDetailsByAlias(param?.alias)
  }, [param])


  const getProdDetailsByAlias = async (alias) => {
    const { data } = await axios.get(BASE_URL + 'search/getProductDetailsAlias/' + alias)
    setProductDetails(...data.data)
  }

  // useEffect(() => {
  //   if (payload) {
  //     setProductDetails(payload);
  //     setImgUrl(payload?.images[0].image);
  //     console.log(imgUrl);
  //   }

  // }, [payload, imgUrl])

  // const params = useParams()
  // console.log(params.imgUrl);

  // useEffect(() => {
  //   dispatch(getProductDetails(params.id))
  // }, [])

  // const imgUrl = "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/"

  return (
    // <div className='product_details' >
    //   <div className='image_div'>
    //     <img src='https://croful.com/wp-content/uploads/2023/10/Diwali-Special-Earrings1-1.jpeg
    //       ' alt='Product' style={{ width: '200px', height: '200px' }} className='zoom-on-hover' />

    //   </div>
    //   <div className='other_div  d-flex justify-content-center d-col'>
    //     <h3>Special Offer</h3>
    //     <label htmlFor='color'>Select Color:</label>
    //     <input type='text' id='color' name='color' />
    //     <br />
    //     <label htmlFor='quantity'>Quantity:</label>
    //     <input type='number' id='quantity' name='quantity' defaultValue='1' />
    //     <button>+</button>
    //   </div>
    // </div>



    <div className='product_details'>
      <div className="container ">
        <div className='row my-5'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='box'>
              <img src={"https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/" + imgUrl} className='img-fluid product_img' alt="" />
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='box'>
              <h3 className='text-uppercase'>{productDetails?.name}</h3>
              <h3 className='text-uppercase price my-3' > {"₹ " + productDetails?.price}</h3>
              <h3 className='seller_name mb-4'>{productDetails?.seller_name}</h3>
              <div className="input-group">
                <input type="number" className='quantity p-3' value={1} />
                <button className='text-uppercase btn btn-dark rounded-0 add_to_cart'>Add To cart</button>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='box'>
              <h3 class="widget-title" >CART</h3>
              <h3 class="widget-title">Recently Viewed Products</h3>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductDetails