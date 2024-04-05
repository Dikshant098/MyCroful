import React, { useEffect, useState } from 'react'
import '../myOrder/MyOrder.scss'
import axios from 'axios'
import { BASE_URL } from '../../../constants/baseUrl'
import dummy from '../../../assets/images/dummy_img.jpg'



const MyOrder = () => {
    const [orderDetails, setOrderDetails] = useState([])
    const [quantity, setQuantity] = useState({}); // Use an object to store quantities for each product


    useEffect(() => {
        getOrderDetails()
    }, [])


    const getOrderDetails = async () => {
        const userId = localStorage.getItem('Croful')
        const url = BASE_URL + 'order/getOrderDetails/' + userId
        try {
            const { data } = await axios.get(url)
            console.log(data);
            setOrderDetails(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <div className='container'>
                <div className='fw-semibold h1 d-flex justify-content-center mb-4'>My Order</div>
                <div className='border border-2 rounded-2' style={{ background: "rgb(250,250,250)" }}>
                    <div className='Product-detail d-flex justify-content-between mt-3'>
                        <div className='col d-flex flex-column align-items-center justify-content-center fw-semibold' style={{ flex: '40%' }}>
                            Product
                        </div>
                        <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                            Seller Name
                        </div>
                        <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                            Price
                        </div>
                        <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>Quantity</div>
                    </div>

                    {/* Product Details */}
                    {orderDetails?.map((productDetails, i) => {
                        return (
                            <div className='Product-detail2 d-flex justify-content-between align-items-center' style={{ marginTop: '5%' }} key={productDetails._id}>
                                <div className='col d-flex flex-row align-items-center justify-content-center fw-semibold' style={{ flex: '36%' }}>
                                    <div className="d-flex flex-row align-items-center">
                                        <img src={productDetails.img || dummy} alt="" className='mb-2' style={{ width: '150px' }} />
                                        <p className="mb-0" style={{ marginLeft: '20px' }}>{productDetails.prodName?.length < 20 ? productDetails.prodName : productDetails?.prodName?.slice(0, 19) + '...'}</p>
                                        <div>
                                            {/* {productDetails} */}
                                        </div>
                                    </div>
                                </div>
                                <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                                    {productDetails.sellerName}
                                </div>
                                <div className='col d-flex flex-column align-items-center fw-semibold' style={{ flex: '40%' }}>
                                    {'₹ ' + productDetails.price}
                                </div>
                                <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>
                                    {/* Counting box */}
                                    <div className='rounded-5' style={{ width: '120px', padding: '10px', border: '2px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{productDetails.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col d-flex justify-content-center fw-semibold' style={{ flex: '20%' }}>{(quantity[productDetails._id] || 1) * productDetails.price * productDetails.quantity}</div> */}
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default MyOrder