import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../../../constants/baseUrl';
import { icons } from 'react-icons';
import { searchShopDetails } from '../../../../redux/search/searchAction';
import { useSelector, useDispatch } from 'react-redux'
import './ProductShopDetails.scss'

const ProductShopDetails = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState();
    const [shopData, setShopData] = useState()
    const [sellerName, setSellerName] = useState()
    const [location, setLocation] = useState()
    const [shopImgUrl, setShopImgUrlImgUrl] = useState()
    const [prodImgUrl, setProdImgUrlImgUrl] = useState()
    const [address, setAddress] = useState()
    const searchResponse = useSelector((state) => state.searchProductShopDetailsReducer);
    const { loading, success, payload } = searchResponse;


    useEffect(() => {
        setId(param.id)
        // console.log(param.id);
        dispatch(searchShopDetails(param.id))

    }, [param])

    const firebaseURl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/'

    useEffect(() => {
        const firebaseURl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/'
        setShopData(payload?.data);
        console.log(payload?.data);
        // console.log(payload?.data);
        const sellerDetails = payload?.data[0]?.seller_details?.source_data?.provider?.descriptor
        const img = firebaseURl + payload?.data[0]?.seller_details?.logo
        const address = payload?.data[0].seller_details.address
        console.log(payload?.data[0]?.seller_details.address);
        setAddress(address)
        const prodImgUrl = firebaseURl + payload?.data[0]?.images[0]?.image
        console.log(prodImgUrl, "prodImgUrl==========");
        setProdImgUrlImgUrl(prodImgUrl)
        setSellerName(sellerDetails?.name)
        setShopImgUrlImgUrl(img)
        setLocation(sellerDetails?.short_desc)

    }, [payload, address])



    // const patchShopData = () => {
    //     const firebaseURl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/'
    //     const sellerDetails = shopData.data[0].seller_details.source_data.provider.descriptor
    //     const img = firebaseURl + shopData.data[0].seller_details.logo
    //     setSellerName(sellerDetails.name)
    //     setImgUrl(img)
    //     setLocation(sellerDetails.short_desc)
    // }

    // const getProductDetailsById = async () => {
    //     // const url = BASE_URL + 'search/getProductDetailsById/' + id

    //     searchShopDetails(id)
    //     // try {
    //     //     const resp = await axios.get(url)
    //     //     axios.get(url).then(resp => {
    //     //         setShopData(resp.data)
    //     //         console.log(resp.data);
    //     //         patchShopData()

    //     //     }).catch(err => {
    //     //         console.log(err);
    //     //     })




    //     // } catch (error) {
    //     //     console.log(error);
    //     // }

    // }

    const handleProductDetails = (alias) => {
        navigate('/dashboard/productDetails/'+ alias)
    }




    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="imgBox">
                            <img src={shopImgUrl ? shopImgUrl : '#'} className='img-fluid' alt="This is an img" />
                        </div>
                    </div>
                    <div className="col-md-9 d-flex flex-column justify-content-center">
                        <div className="title h1">{sellerName}</div>

                        <div className="location text-secondary text-uppercase">{location}</div>
                        <div className="location text-secondary text-uppercase">{address}</div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="shop">Shop Products</div>
                <div className="row">
                    {
                        shopData?.map((p) => {
                            return (
                                <div className="col-lg-3 col-md-6 my-3 card border-0 ">
                                    <div className="card-body p-1 border border-1 ">
                                        <div className="product_card rounded-0">
                                            <div className="product_card_body p-2"
                                                onClick={() => handleProductDetails(p.alias)}
                                            >
                                                <img src={firebaseURl + p?.images[0]?.image} className='img-fluid product_img' alt="" />
                                                <div className='py-2'>
                                                    <div className='fw-bold product_title'>{p?.name}</div>
                                                    <div className='seller_name'>
                                                        Seller -{p?.seller_name}
                                                    </div>
                                                    <div className='prize'>
                                                        ₹{p?.price}
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="product_card_footer d-grid p-2 add_to_cart ">
                                                <button
                                                    // to={`/dashboard/productDetails/${p._id}`}
                                                    type="submit"
                                                    className='btn btn-dark rounded-0 add_to_Cart'
                                                // onClick={() => addToCart(p._id)}
                                                >
                                                    Add to Cart

                                                </button>
                                                {/* <button onClick={() => addToCart(p)}></button> */}
                                            </div>
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

export default ProductShopDetails