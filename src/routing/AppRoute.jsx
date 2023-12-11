import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from '../screens/Authentication/login/LoginScreen'
import RegisterScreen from '../screens/Authentication/register/RegisterScreen'
import DashboardScreen from '../screens/dashboard/DashboardScreen'
// import DashboardScreen from '../screens/dashboard/DashboardScreen'
// import DashboardRoute from './dashboard/DashboardRoute'
import ProductList from '../components/dashboard/product/productList/ProductList'
import ProductDetails from '../components/dashboard/product/productDetails/ProductDetails'
import RedirectScreen from '../screens/Redirect/RedirectScreen'
import Home from '../components/home/Home'

const AppRoute = () => {
    return (
        <Routes>
            <Route exact={true} path='/' element={<LoginScreen />}></Route>
            <Route exact={true} path='/login' element={<LoginScreen />}></Route>
            <Route exact={true} path='/register' element={<RegisterScreen />}></Route>
            <Route exact={true} path='/dashboard' element={<DashboardScreen />}>

                <Route exact={true} path='home' element={<Home />}></Route>
                <Route exact={true} path='productList/:search' element={<ProductList />}></Route>
                <Route exact={true} path='productDetails/:id' element={<ProductDetails />}></Route>
                <Route path='*' element={<RedirectScreen />}></Route>
            </Route>
            <Route path='*' element={<RedirectScreen />}></Route>
        </Routes>
    )
}

export default AppRoute
