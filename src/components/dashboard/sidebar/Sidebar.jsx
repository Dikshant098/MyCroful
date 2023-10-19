import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { BsHouse, BsTable, BsGrid, BsPeople, BsPersonCircle } from 'react-icons/bs'
import '../sidebar/sidebar.scss'
import { useEffect } from 'react';
import { useState } from 'react';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [toggleProfile, settoggleProfile] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    useEffect(() => {
        const profile = document.querySelector('#Profile');
        if (profile) {
            profile.addEventListener('click', toggleSidebar);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            if (profile) {
                profile.removeEventListener('click', toggleSidebar);
            }
        };
    }, [isSidebarOpen]);

    const sidebarTransform = isSidebarOpen ? 'translateX(0%)' : 'translateX(110%)';

    return (
        <div className='sidebar' style={{ transform: sidebarTransform }}>
            <div className="row">
                <div className='bg-dark col-auto min-vh-100 d-flex justify-content-between flex-column' style={{ width: '100%' }}>
                    <div>
                        <a href="#" className='text-decoration-none text-white d-flex align-items-center ms-3 mt-2  ' aria-current="page">
                            <span className='ms-1 fs-4'>Your Profile</span>
                        </a>
                        <hr className='text-secondary' />
                        <ul className='nav nav-pills flex-column'>
                            <li className='nav-item text-white fs-4 my-1'>
                                <a href="#" className='nav-link text-white fs-5 d-flex align-items-center' aria-current="page">
                                    <AiOutlineDashboard className='fs-5' />
                                    <span className='ms-2'>Dashboard</span>
                                </a>
                            </li>
                            <li className='nav-item text-white fs-4 my-1'>
                                <a href="#" className='nav-link text-white fs-5 d-flex align-items-center' aria-current="page">
                                    <BsHouse className='fs-5' />
                                    <span className='ms-2'>Home</span>
                                </a>
                            </li>
                            <li className='nav-item text-white fs-4 my-1'>
                                <a href="#" className='nav-link text-white fs-5 d-flex align-items-center' aria-current="page">
                                    <BsTable className='fs-5' />
                                    <span className='ms-2'>Orders</span>
                                </a>
                            </li>
                            <li className='nav-item text-white fs-4 my-1'>
                                <a href="#" className='nav-link text-white fs-5 d-flex align-items-center' aria-current="page">
                                    <BsGrid className='fs-5' />
                                    <span className='ms-2'>Products</span>
                                </a>
                            </li>
                            <li className='nav-item text-white fs-4 my-1'>
                                <a href="#" className='nav-link text-white fs-5 d-flex align-items-center' aria-current="page">
                                    <BsPeople className='fs-5' />
                                    <span className='ms-2'>Customer</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="Yourself dropdown open">
                        <a className="text-decoration-none text-white dropdown-toggle fs-5 p-3 d-flex align-items-center" type="button" id="triggerid" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsPersonCircle className='fs-5' />
                            <span className='ms-2'>YourSelf</span>
                        </a>
                        <div className="dropdown-menu bg-white" aria-labelledby="triggerid">
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
