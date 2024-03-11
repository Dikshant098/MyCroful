import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from '../screens/Authentication/login/LoginScreen'
import RegisterScreen from '../screens/Authentication/register/RegisterScreen'
import DashboardScreen from '../screens/dashboard/DashboardScreen'
// import DashboardScreen from '../screens/dashboard/DashboardScreen'
// import DashboardRoute from './dashboard/DashboardRoute'
import ProductListCategory from '../components/dashboard/product/productListCategory/ProductListCategory'
import ProductDetails from '../components/dashboard/product/productDetails/ProductDetails'
import RedirectScreen from '../screens/Redirect/RedirectScreen'
import Home from '../components/home/Home'
import Checkout from '../components/dashboard/cart/Checkout'
import ProductShopDetails from '../components/dashboard/product/productShopDetails/ProductShopDetails'
import Cart from '../components/dashboard/cart/Cart'
import PDF from '../components/dashboard/cart/PDF'

const AppRoute = () => {
    return (
        <Routes>
            <Route exact={true} path='/' element={<LoginScreen />}></Route>
            <Route exact={true} path='/login' element={<LoginScreen />}></Route>
            <Route exact={true} path='/register' element={<RegisterScreen />}></Route>
            <Route exact={true} path='/dashboard' element={<DashboardScreen />}>
                <Route exact={true} path='cart/checkout' element={<Checkout />} />
                <Route exact={true} path='cart/cart' element={<Cart />} />
                <Route exact={true} path='home' element={<Home />}></Route>
                <Route exact={true} path='productListCategory/:search' element={<ProductListCategory />}></Route>
                <Route exact={true} path='productDetails/:alias' element={<ProductDetails />}></Route>
                <Route exact={true} path='productShopDetails/:id' element={<ProductShopDetails />}></Route>
                <Route path='*' element={<RedirectScreen />}></Route>
            </Route>
            <Route exact={true} path='invoiceDetails/:formData' element={<PDF />}></Route>
            <Route path='*' element={<RedirectScreen />}></Route>
        </Routes>
    )
}

export default AppRoute
