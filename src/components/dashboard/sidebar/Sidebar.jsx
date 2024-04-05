import React, { useState, useEffect } from 'react';
import { AiOutlineDashboard, AiOutlineClose } from 'react-icons/ai'; // Import AiOutlineClose icon
import { BsHouse, BsTable, BsGrid } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import '../sidebar/sidebar.scss';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const navigate = useNavigate()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false); // Close the sidebar
    };

    // const logOutHandler = () => {
    //     navigate('/login')
    //     localStorage.setItem('Croful', '')
    //   }

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
        <div className='sidebar bg-white' style={{ transform: sidebarTransform }}>
            <div className='col-auto min-vh-100 d-flex flex-column' style={{ background: "linear-gradient(to top, rgba(255, 215, 0, 0.8), rgba(225, 175, 209,1))" }}>
                <div className='pt-2'>
                    <div className='d-flex justify-content-center align-items-center m-3'>
                        <a href="#" className='text-decoration-none text-black d-flex align-items-center' id='Profile'>
                            <span className='h3'>Your Profile</span>
                        </a>
                        <button className="btn btn-link text-black" onClick={closeSidebar}>
                            <AiOutlineClose className='h3'/>
                        </button>
                    </div>
                    <hr className='text-secondary' />
                    <ul className='nav flex-column h5'>
                        <NavItem icon={<BsHouse />} text="Home" link="/dashboard/Home" />
                        <NavItem icon={<AiOutlineDashboard />} text="Profile" link="/dashboard/profile/true" />
                        <NavItem icon={<BsTable />} text="My Orders" link="/dashboard/myOrder/true" />
                        {/* <NavItem icon={<BsGrid />} onClick= text="Logout" /> */}
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
        <li className='nav-item text-black my-1' onMouseEnter={handleHover} onMouseLeave={handleHover} style={navItemStyle}>
            {link ? (
                <Link to={link} className='nav-link text-black d-flex align-items-center'>
                    {icon}
                    <span className='ms-2'>{text}</span>
                </Link>
            ) : (
                <a href="#" className='nav-link text-black d-flex align-items-center'>
                    {icon}
                    <span className='ms-2'>{text}</span>
                </a>
            )}
        </li>
    );
};

export default Sidebar;
