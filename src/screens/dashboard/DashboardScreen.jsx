import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
// import Footer from '../../components/footer/Footer'
// import Sidebar from '../../components/dashboard/sidebar/Sidebar'

const DashboardScreen = () => {
    return (
        <React.Fragment>
            
            <Header />
            <div style={{marginTop:'150px'}}>
            <Outlet />
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default DashboardScreen