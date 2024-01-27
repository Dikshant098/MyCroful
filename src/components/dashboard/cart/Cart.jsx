import React from 'react'
import { useState } from 'react';
import dummy from '../../../assets/images/dummy_img.jpg'

function Cart() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className='container-fluid'>
            <div className='fw-semibold h1 d-flex justify-content-center mb-5'>Cart</div>
            <div className='' style={{ border: '1px solid gray', width: '100%', height: '45vh' }}>
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
                <div className='Product-detail2 d-flex justify-content-between align-items-center' style={{ marginTop: '5%' }}>
                    {/* Cross button at the beginning */}
                    <button type="button" className="btn-close" aria-label="Close" style={{ marginLeft: '20px' }}>
                    </button>
                    <div className='col d-flex flex-row align-items-center justify-content-center fw-semibold' style={{ flex: '36%' }}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={dummy} alt="" srcSet="" className='mb-2' style={{ width: '150px' }} />
                            <p className="mb-0" style={{ marginLeft: '20px' }}>Product name</p>
                        </div>
                    </div>
                    <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                        2,500
                    </div>
                    <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>
                        {/* Counting box */}
                        <div style={{ width: '120px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <button className='d-flex align-items-center justify-content-center' onClick={decreaseCount} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }} >-</button>
                                <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{count}</span>
                                <button className='d-flex align-items-center justify-content-center' onClick={increaseCount} style={{ background: 'transparent', height: '20px', width: '20px', border: 'none' }} >+</button>
                            </div>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>2,500</div>
                </div>
                <button className='btn btn-dark mt-3 me-auto' style={{ width: '22%' }} > Update Changes</button>
            </div>  

            {/* Crad Total */}
            <div className='container-fluid mt-5'>
                <h2 className=''>Cart Totals</h2>
                <div className="card mt-3" style={{
                    width: '18rem', minHeight: '200px',
                    position: 'relative',
                }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex flex-row">
                            <span className="me-2 col">Subtotal</span>
                            <div className='col'>
                                ₹999.00
                            </div>
                        </li>
                        <li className="list-group-item d-flex flex-row">
                            <span className="me-2 col">Shipping</span>
                            <div className='col'>
                                Flat rate
                                Shipping to Maharashtra.

                                Change address
                            </div>
                        </li>
                        <li className="list-group-item d-flex flex-row">
                            <span className="me-2 col">Total</span>
                            <div className='col'>
                                ₹999.00
                            </div>
                        </li>
                    </ul>
                </div>
                <button className='btn btn-dark mt-3' style={{ width: '22%' }} > Proceed To Checkout</button>
            </div>
        </div>
    )
}

export default Cart
