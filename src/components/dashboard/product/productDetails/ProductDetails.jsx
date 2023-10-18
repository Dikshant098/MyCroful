import React from 'react'
import '../productDetails/ProductDetails.scss'

const ProductDetails = () => {
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
      <div className="container">
        <div className='row my-5'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='box'>
              <img src='https://croful.com/wp-content/uploads/2023/10/Diwali-Special-Earrings1-1.jpeg
           ' alt='Product' className='zoom-on-hover img-fluid' />

            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='box'>
              <h3 className='text-uppercase'>Sadi Kudta Salver</h3>
              <h3 className='text-uppercase price my-3' > ₹3,500.00</h3>
              <h3 className='seller_name mb-4'>Seller - Krunal's Restaurent</h3>
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
    </div>
  )
}

export default ProductDetails