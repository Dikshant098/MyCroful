import React from 'react'
import { useState, useEffect } from 'react';
import dummy from '../../../assets/images/dummy_img.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from '../../../constants/baseUrl';
import axios from 'axios'
const firebaseURl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/'

function Cart() {
    const param = useParams();
    const dispatch = useDispatch()
    const productDetailsResponse = useSelector((state) => state.productDetailsReducer);
    const { loading, success, payload } = productDetailsResponse;
    const [cartDetails, setCartDetails] = useState([])
    const [productDetails, setProductDetails] = useState([])
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)

    // useEffect(() => {
    //     getProdDetailsByAlias(param?.alias)
    // }, [param])

    // const getProdDetailsByAlias = async (alias) => {
    //     const { data } = await axios.get(BASE_URL + 'search/getProductDetailsAlias/' + alias);
    //     console.log(...data.data);
    //     setProductDetails(...data.data);
    // };

    // useEffect(() => {
    // }, [productDetails])

    useEffect(() => {
        getCartDetails()
    }, [])



    const getCartDetails = async () => {
        const userId = localStorage.getItem('Croful')
        const url = BASE_URL + '/cart/getCartDetails/' + userId
        try {
            const { data } = await axios.get(url)
            setCartDetails(data)
            let subtotal = 0;
            data.map(d => {
                subtotal = d.price + subtotal
            })
            setTotal(subtotal)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProductDetails = async (_id) => {
        const url = BASE_URL + 'cart/deleteCartDetails/' + _id
        try {
            const data = await axios.delete(url)
            if (data) {
                getCartDetails()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const goCheckout = () => {
        navigate('/dashboard/cart/checkout')
    }



    return (
        <div className='container-fluid'>
            <div className='fw-semibold h1 d-flex justify-content-center mb-5'>Cart</div>
            <div className='' style={{ border: '1px solid gray' }}>
                <div className='Product-detail d-flex justify-content-between mt-3'>
                    <div className='col d-flex flex-column align-items-center justify-content-center fw-semibold' style={{ flex: '40%' }}>
                        Product
                    </div>
                    <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                        Price
                    </div>
                    <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>Quantity</div>
                    <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>Subtotal</div>
                </div>

                {/* second block */} 

                {/* Cross button at the beginning */}
                {cartDetails?.map(productDetails => {
                    return (
                        <div className='Product-detail2 d-flex justify-content-between align-items-center' style={{ marginTop: '5%' }}>
                            <button type="button" onClick={() => deleteProductDetails(productDetails?._id, productDetails?.userId)} className="btn-close" aria-label="Close" style={{ marginLeft: '20px' }}>
                            </button>
                            <div className='col d-flex flex-row align-items-center justify-content-center fw-semibold' style={{ flex: '36%' }}>
                                <div className="d-flex flex-row align-items-center">
                                    <img src={productDetails?.img} alt="" srcSet="" className='mb-2' style={{ width: '150px' }} />
                                    <p className="mb-0" style={{ marginLeft: '20px' }}>{productDetails?.productName?.length < 20 ? productDetails?.productName : productDetails?.productName?.slice(0, 19) + '...'}</p>
                                </div>
                            </div>
                            <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                                {'₹ ' + productDetails.price}
                            </div>
                            <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>
                                {/* Counting box */}
                                <div style={{ width: '120px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <button className='d-flex align-items-center justify-content-center' onClick={decreaseCount} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }} >-</button>
                                        <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{productDetails?.quantity}</span>
                                        <button className='d-flex align-items-center justify-content-center' onClick={increaseCount} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }} >+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>{productDetails?.quantity * productDetails.price}</div>
                        </div>
                    )


                })}

                <button className='btn btn-dark m-3 me-0' style={{ width: '22%' }} > Update Changes</button>

                {/* Crad Total */}
                <div className='container-fluid my-5'>
                    <h2 className=''>Cart Totals</h2>
                    <div className="card mt-3" style={{
                        width: '18rem', minHeight: '200px',
                        position: 'relative',
                    }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex flex-row">
                                <span className="me-2 col">Subtotal</span>
                                <div className='col'>
                                    ₹{total}.00
                                </div>
                            </li>
                            {/* <li className="list-group-item d-flex flex-row">
                                <span className="me-2 col">Shipping</span>
                                <div className='col'>
                                    Flat rate
                                    Shipping to Maharashtra.

                                    Change address
                                </div>
                            </li> */}
                            <li className="list-group-item d-flex flex-row">
                                <span className="me-2 col">Total</span>
                                <div className='col'>
                                    ₹{total}.00
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className='btn btn-dark mt-3' style={{ width: '22%' }} onClick={goCheckout}> Proceed To Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default Cart
