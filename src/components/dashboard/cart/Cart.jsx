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

    return (
        <div className='container-fluid'>
            <div className='fw-semibold h1 d-flex justify-content-center mb-5'>Cart</div>
            <div className='' style={{ border: '2px solid black', width: '100%', height: '45vh' }}>
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
                <div className='Product-detail d-flex mt-5 justify-content-between align-items-center 5'>
                    <div className='col d-flex flex-column align-items-center justify-content-center fw-semibold' style={{ flex: '40%' }}>
                        <img src={{ dummy }} alt="" srcset="" style={{ width: '25%', height: '25%' }} />
                    </div>
                    <span>This is the special image</span>
                    <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                        <div className='' style={{ border: '2px solid black', width: '10vw', height: '8vh' }}></div>
                    </div>
                    <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>Quantity</div>
                    <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>Subtotal</div>
                </div>
            </div>
        </div>
    )
}

export default Cart
