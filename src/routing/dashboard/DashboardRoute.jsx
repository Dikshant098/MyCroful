import React from 'react'
import { Route } from 'react-router-dom'
import ProductList from '../../components/dashboard/product/productList/ProductList'
import ProductDetails from '../../components/dashboard/product/productDetails.jsx/ProductDetails'

const DashboardRoute = () => {
    return (
        <>
            <Route path='/productList' element={<ProductList />}></Route>
            <Route path='/productDetails' element={<ProductDetails />}></Route>
        </>
    )
}

export default DashboardRoute