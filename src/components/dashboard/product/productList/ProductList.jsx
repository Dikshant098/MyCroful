import React, { useEffect, useState } from 'react'
import '../productList/ProductList.scss'
import dummyImg from '../../../../assets/images/dummy_img.jpg'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchProduct } from '../../../../redux/search/searchAction'
import { getProductDetails } from '../../../../redux/productDetails/productDetailsAction'

const ProductList = () => {
  const [productList, setProductList] = useState([])
  const params = useParams()
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const imgUrl = "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6533ba7d2576cc75c2dfd966/bitbox-ram-8gb.jpg"

  console.log(params.search);

  const searchResponse = useSelector((state) => state.searchReducer);
  const { loading, success, payload } = searchResponse;

  useEffect(() => {
    if (payload) {
      setProductList(payload);
    }
  }, [])

  useEffect(() => {
    setProductList(payload?.data);
    console.log(productList);
  }, [payload])

  const imgUrl = "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/"
  useEffect(() => {
    // dispatch(searchProduct(params.search))
  }, [])


  const addToCart = (id) => {
    dispatch(getProductDetails(id))
  }

  return (
    <div className='product_list my-3'>
      <div className="container">
        <div className="row">
          {
            productList?.map(p => {
              return (
                <div className="col-lg-3 col-md-6 my-3">
                  <div className="product_card rounded-0">
                    <div className="product_card_body p-2">
                      <img src={imgUrl + p.images[0].image} className='img-fluid product_img' alt="" />
                      <div className='py-2'>
                        <div className='fw-bold product_title'>{p.name}</div>
                        <div className='seller_name'>
                          Seller -{p.seller_name}
                        </div>
                        <div className='prize'>
                          ₹{p.price}
                        </div>
                      </div>
                    </div>
                    <div className="product_card_footer d-grid p-2 ">
                      <Link
                        to={`/dashboard/productDetails/${p._id}`}
                        type="submit"
                        className='btn btn-dark rounded-0 add_to_Cart'
                        onClick={() => addToCart(p._id)}
                      >
                        Add to Cart

                      </Link>
                      {/* <button onClick={() => addToCart(p)}></button> */}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList