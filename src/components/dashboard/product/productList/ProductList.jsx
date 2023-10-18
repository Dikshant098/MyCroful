import React, { useEffect, useState } from 'react'
import '../productList/ProductList.scss'
import dummyImg from '../../../../assets/images/dummy_img.jpg'

const ProductList = () => {

  const [productList, setProductList] = useState()

  const arr = [
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - KRUNALS Restaurant',
      prize: 161.9,
      imageUrl: 'https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.webp?b=1&s=170667a&w=0&k=20&c=rI5CZUykAT3ipDLiAztjhtMhUiDXVobCnWhA_aA2abg='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - SohelS Restaurant',
      prize: 200.9,
      imageUrl: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4='

    },
    {
      title: 'Margherita Pizza Small 6 Inch',
      sellerName: "Seller -  Luigi's Pizza",
      prize: 130.9,
      imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - KRUNALS Restaurant',
      prize: 161.9,
      imageUrl: 'https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.webp?b=1&s=170667a&w=0&k=20&c=rI5CZUykAT3ipDLiAztjhtMhUiDXVobCnWhA_aA2abg='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - SohelS Restaurant',
      prize: 200.9,
      imageUrl: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4='

    },
    {
      title: 'Margherita Pizza Small 6 Inch',
      sellerName: "Seller -  Luigi's Pizza",
      prize: 130.9,
      imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - KRUNALS Restaurant',
      prize: 161.9,
      imageUrl: 'https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.webp?b=1&s=170667a&w=0&k=20&c=rI5CZUykAT3ipDLiAztjhtMhUiDXVobCnWhA_aA2abg='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - SohelS Restaurant',
      prize: 200.9,
      imageUrl: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4='

    },
    {
      title: 'Margherita Pizza Small 6 Inch',
      sellerName: "Seller -  Luigi's Pizza",
      prize: 130.9,
      imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - KRUNALS Restaurant',
      prize: 161.9,
      imageUrl: 'https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.webp?b=1&s=170667a&w=0&k=20&c=rI5CZUykAT3ipDLiAztjhtMhUiDXVobCnWhA_aA2abg='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - SohelS Restaurant',
      prize: 200.9,
      imageUrl: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4='

    },
    {
      title: 'Margherita Pizza Small 6 Inch',
      sellerName: "Seller -  Luigi's Pizza",
      prize: 130.9,
      imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - KRUNALS Restaurant',
      prize: 161.9,
      imageUrl: 'https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.webp?b=1&s=170667a&w=0&k=20&c=rI5CZUykAT3ipDLiAztjhtMhUiDXVobCnWhA_aA2abg='
    },
    {
      title: 'Pizza Sandwich',
      sellerName: 'Seller - SohelS Restaurant',
      prize: 200.9,
      imageUrl: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4='

    },
    {
      title: 'Margherita Pizza Small 6 Inch',
      sellerName: "Seller -  Luigi's Pizza",
      prize: 130.9,
      imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk='
    },
  ]

  useEffect(() => {
    setProductList(arr)
  }, [])

  return (
    <div className='product_list my-3'>
      <div className="container">
        <div className="row">
          {
            arr.map(p => {
              return (
                <div className="col-lg-3 col-md-6 my-3">
                  <div className="product_card rounded-0">
                    <div className="product_card_body p-2">
                      <img src={p.imageUrl} className='img-fluid product_img' alt="" />
                      <div className='py-2'>
                        <div className='fw-bold product_title'>{p.title}</div>
                        <div className='seller_name'>
                          Seller -{p.sellerName}
                        </div>
                        <div className='prize'>
                          ₹{p.prize}
                        </div>
                      </div>
                    </div>
                    <div className="product_card_footer d-grid p-2 ">
                      <button className='btn btn-dark rounded-0 add_to_Cart'>Add to Cart</button>
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