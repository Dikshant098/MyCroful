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
    dispatch(searchProduct(params.search))
  }, [])

  // const arr = [
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - KRUNALS Restaurant',
  //     prize: 161.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Kadiyal-Paithani-300x300.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - SohelS Restaurant',
  //     prize: 200.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Lotous-Brocade-Paithani-300x300.jpeg'

  //   },
  //   {
  //     title: 'Margherita Pizza Small 6 Inch',
  //     sellerName: "Seller -  Luigi's Pizza",
  //     prize: 130.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Diwali-Special-Earrings1-1-300x300.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - KRUNALS Restaurant',
  //     prize: 161.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Designer-Party-Wear-New-Navratri-Chaniya-Choli-.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - SohelS Restaurant',
  //     prize: 200.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Gold-Plated-Earrings-300x300.jpeg'

  //   },
  //   {
  //     title: 'Margherita Pizza Small 6 Inch',
  //     sellerName: "Seller -  Luigi's Pizza",
  //     prize: 130.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Stone-Bird-Stud-Earrings--300x300.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - KRUNALS Restaurant',
  //     prize: 161.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Gold-Plated-Earrings-2-300x300.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - SohelS Restaurant',
  //     prize: 200.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/New-Designer-Siqwans-Lehenga-Choli-With-Dupatt-Set-300x300.jpeg'

  //   },
  //   {
  //     title: 'Margherita Pizza Small 6 Inch',
  //     sellerName: "Seller -  Luigi's Pizza",
  //     prize: 130.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Banarasi-Kora-Taunchoi-Saree--300x300.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - KRUNALS Restaurant',
  //     prize: 161.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/New-exclusive-Design-Cotton-Silk-Zari-Maheswari-Saree-300x300.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - SohelS Restaurant',
  //     prize: 200.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/10/Saree-With-Contrast-Blouse-Combo-Set--300x300.jpeg'

  //   },
  //   {
  //     title: 'Margherita Pizza Small 6 Inch',
  //     sellerName: "Seller -  Luigi's Pizza",
  //     prize: 130.9,
  //     imageUrl: 'https://croful.com/wp-content/uploads/2023/09/Linen-Saree-1--300x300.jpeg'
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - KRUNALS Restaurant',
  //     prize: 161.9,
  //     imageUrl: 'https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.webp?b=1&s=170667a&w=0&k=20&c=rI5CZUykAT3ipDLiAztjhtMhUiDXVobCnWhA_aA2abg='
  //   },
  //   {
  //     title: 'Pizza Sandwich',
  //     sellerName: 'Seller - SohelS Restaurant',
  //     prize: 200.9,
  //     imageUrl: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4='

  //   },
  //   {
  //     title: 'Margherita Pizza Small 6 Inch',
  //     sellerName: "Seller -  Luigi's Pizza",
  //     prize: 130.9,
  //     imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk='
  //   },
  // ]

  // useEffect(() => {
  //   setProductList(arr)
  // }, [])

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