import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
// import Home from '../../components/home/Home'
import Footer from '../../components/footer/Footer'
// import Sidebar from '../../components/dashboard/sidebar/Sidebar'

const DashboardScreen = () => {
    return (
        <React.Fragment>
            
            <Header />
            <div style={{marginTop:'150px'}}>
            {/* <Home/> */}
            <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default DashboardScreen