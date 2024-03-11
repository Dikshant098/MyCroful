import React, { useState, useEffect } from 'react';
import dummy from '../../../assets/images/dummy_img.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from '../../../constants/baseUrl';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseURl = 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/'

function Cart() {
    const param = useParams();
    const dispatch = useDispatch()
    const productDetailsResponse = useSelector((state) => state.productDetailsReducer);
    const { loading, success, payload } = productDetailsResponse;
    const [cartDetails, setCartDetails] = useState([])
    const [productDetails, setProductDetails] = useState([])
    const [quantity, setQuantity] = useState({}); // Use an object to store quantities for each product
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    const [updatedTotal, setUpdatedTotal] = useState(null); // State to hold the updated total after clicking "Update Changes"

    useEffect(() => {
        getCartDetails()
    }, [])

    useEffect(() => {
        if (updatedTotal !== null) {
            setTotal(updatedTotal); // Update the total after clicking "Update Changes"
        }
    }, [updatedTotal])

    const getCartDetails = async () => {
        const userId = localStorage.getItem('Croful')
        const url = BASE_URL + '/cart/getCartDetails/' + userId
        try {
            const { data } = await axios.get(url)
            setCartDetails(data)
            let totalPrice = 0;
            data.forEach(item => {
                totalPrice += item.price; // Calculate total price by summing up prices of all items
            });
            setTotal(totalPrice);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProductDetails = async (_id) => {
        const url = BASE_URL + 'cart/deleteCartDetails/' + _id
        try {
            const data = await axios.delete(url)
            if (data) {
                toast.error("Product successfully deleted !!", {
                    autoClose: 1000,
                })
                console.log(data);
                getCartDetails()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const increaseCount = (_id) => {
        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [_id]: (prevQuantity[_id] || 0) + 1 // Increment quantity for specific product
        }));
    };

    const decreaseCount = (_id) => {
        if (quantity[_id] && quantity[_id] > 0) {
            setQuantity(prevQuantity => ({
                ...prevQuantity,
                [_id]: prevQuantity[_id] - 1 // Decrement quantity for specific product
            }));
        }
    };

    const updateChanges = async () => {
        // Update quantity for each product in the cart
        for (const item of cartDetails) {
            try {
                await axios.put(BASE_URL + '/cart/updateQuantity/' + item._id, {
                    quantity: quantity[item._id] || 1
                });
            } catch (error) {
                console.log(error);
            }
        }
        // Fetch updated cart details
        getCartDetails();
        // Calculate updated total
        let updatedTotal = 0;
        cartDetails.forEach(item => {
            updatedTotal += item.price * (quantity[item._id] || 1);
        });
        setUpdatedTotal(updatedTotal);
    };

    const goCheckout = () => {
        navigate('/dashboard/cart/checkout')
    }

    return (
        <div className='container' style={{ marginTop: '17%' }}>
            <ToastContainer />
            <div className='fw-semibold h1 d-flex justify-content-center mb-4'>Cart</div>
            <div className='border border-2 rounded-2' style={{background: "linear-gradient(to top, rgba(178,216,216,1), rgba(0, 0, 0, 0))"}}>
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

                {/* Product Details */}
                {cartDetails?.map(productDetails => {
                    return (
                        <div className='Product-detail2 d-flex justify-content-between align-items-center' style={{ marginTop: '5%' }} key={productDetails._id}>
                            <button type="button" onClick={() => deleteProductDetails(productDetails._id)} className="btn-close" aria-label="Close" style={{ marginLeft: '20px' }}>
                            </button>
                            <div className='col d-flex flex-row align-items-center justify-content-center fw-semibold' style={{ flex: '36%' }}>
                                <div className="d-flex flex-row align-items-center">
                                    <img src={productDetails.img || dummy} alt="" className='mb-2' style={{ width: '150px' }} />
                                    <p className="mb-0" style={{ marginLeft: '20px' }}>{productDetails.productName?.length < 20 ? productDetails.productName : productDetails.productName.slice(0, 19) + '...'}</p>
                                </div>
                            </div>
                            <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                                {'₹ ' + productDetails.price}
                            </div>
                            <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>
                                {/* Counting box */}
                                <div className='rounded-5' style={{ width: '120px', padding: '10px', border: '2px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <button className='d-flex align-items-center justify-content-center' onClick={() => decreaseCount(productDetails._id)} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }}>-</button>
                                        <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{quantity[productDetails._id] || 1}</span>
                                        <button className='d-flex align-items-center justify-content-center' onClick={() => increaseCount(productDetails._id)} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>{(quantity[productDetails._id] || 1) * productDetails.price}</div>
                        </div>
                    )
                })}

                {/* Update Changes Button */}
                <button className='btn btn-dark m-3 me-0 rounded-5' style={{ width: '22%', backgroundColor:'rgb(0,128,128)' }} onClick={updateChanges}> Update Changes</button>

                {/* Cart Totals */}
                <div className='container-fluid my-5'>
                    <h2 className=''>Cart Totals</h2>
                    <div className="card mt-3" style={{
                        width: '18rem', minHeight: '200px',
                        position: 'relative',
                    }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex flex-row">
                                <span className="me-2 col">Price</span>
                                <div className='col'>
                                    ₹{total}.00
                                </div>
                            </li>
                            <li className="list-group-item d-flex flex-row">
                                <span className="me-2 col">Total</span>
                                <div className='col'>
                                    {updatedTotal !== null ? updatedTotal : total}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className='btn btn-dark mt-3 rounded-5' style={{ width: '22%', backgroundColor:'rgb(0,128,128)' }} onClick={goCheckout}> Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
