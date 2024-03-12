import React, { useState, useEffect } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsHouse, BsTable, BsGrid, BsPeople, BsPersonCircle } from 'react-icons/bs';
import { Link } from "react-router-dom";
import '../sidebar/sidebar.scss';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const profile = document.querySelector('#Profile');
        if (profile) {
            profile.addEventListener('click', toggleSidebar);
        }

        return () => {
            if (profile) {
                profile.removeEventListener('click', toggleSidebar);
            }
        };
    }, [isSidebarOpen]);

    const sidebarTransform = isSidebarOpen ? 'translateX(0%)' : 'translateX(120%)';

    return (
        <div className='sidebar' style={{ transform: sidebarTransform }}>
            <div className='col-auto min-vh-100 d-flex flex-column' style={{ background: "linear-gradient(to top, rgba(0,128,128,1), rgba(0, 0, 0, 0))" }}>
                <div className='pt-3'>
                    <a href="#" className='text-decoration-none text-white d-flex align-items-center justify-content-center' id='Profile'>
                        <span className='h3'>Your Profile</span>
                    </a>
                    <hr className='text-secondary' />
                    <ul className='nav flex-column h5'>
                        <NavItem icon={<BsHouse />} text="Home" link="/dashboard/Home" />
                        <NavItem icon={<AiOutlineDashboard />} text="Profile"  />
                        <NavItem icon={<BsTable />} text="My Orders" />
                        <NavItem icon={<BsGrid />} text="Logout" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

const NavItem = ({ icon, text, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const navItemStyle = {
        transition: 'background-color 0.3s ease',
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    };

    return (
        <li className='nav-item text-white my-1' onMouseEnter={handleHover} onMouseLeave={handleHover} style={navItemStyle}>
            {link ? (
                <Link to={link} className='nav-link text-white d-flex align-items-center'>
                    {icon}
                    <span className='ms-2'>{text}</span>
                </Link>
            ) : (
                <a href="#" className='nav-link text-white d-flex align-items-center'>
                    {icon}
                    <span className='ms-2'>{text}</span>
                </a>
            )}
        </li>
    );
};

export default Sidebar;
