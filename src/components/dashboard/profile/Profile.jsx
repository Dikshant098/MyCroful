import React, { useEffect, useState } from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import '../profile/Profile.scss';
import axios from 'axios';
import { BASE_URL } from '../../../constants/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState();

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log('Submitted:', firstName, lastName);
        if (firstName == '') {
            toast.warning("firstName required !!", {
                autoClose: 1000,
            })
            return
        } else if (lastName == '') {
            toast.warning("lastName required !!", {
                autoClose: 1000,
            })
            return
        } else {

            // Close the popup
            let obj = {
                firstName, lastName
            }
            updateUserData(obj)
            setShowPopup(false);
        }

    };

    const updateUserData = async (obj) => {
        const _id = localStorage.getItem('Croful')
        const url = BASE_URL + 'user/updateUserById/' + _id
        try {
            const { data } = await axios.put(url, obj)
            const userId = localStorage.getItem('Croful')
            getUserDataById(userId)
            toast.success("Profile successfully updated !!", {
                autoClose: 1000,
            })
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        const userId = localStorage.getItem('Croful')
        // console.log(userId);
        getUserDataById(userId)

    }, [])

    const getUserDataById = async (_id) => {
        const url = BASE_URL + 'user/findUserById/' + _id
        try {
            const { data } = await axios.get(url);
            setUserData(...data)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="container" style={{height:'49.4vh'}}>
            <ToastContainer />
            <div
                className="container-fluid pb-5"
                style={{
                    height: '70%',
                    width: '100%',
                    border: '1px solid black',
                    borderRadius: '6px',
                }}
            >
                <div className="container-fluid mt-3 d-flex align-items-center justify-content-between">
                    <div className="fw-bold h5">Personal Information</div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div
                            className="edit-button d-flex align-items-center justify-content-center"
                            style={{
                                borderRadius: '8px',
                                padding: '5px',
                                cursor: 'pointer',
                                backgroundColor: 'rgb(76,166,166)',
                                color: 'white',
                                border: '1px solid black'
                            }}
                            onClick={togglePopup}
                        >
                            Edit <MdOutlineModeEdit style={{ paddingLeft: '3px', fontSize: '22px' }} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <span>First Name</span>
                                <span>{userData?.firstName}</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <span>Last Name</span>
                                <span>{userData?.lastName}</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <span>Phone</span>
                                <span>{userData?.mobile}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="row">
                                <span>Address</span>
                                <span>Update details</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup mt-3 pb-3" style={{ border: '1px solid black', borderRadius: '5px', padding: '5px' }}>
                    <div className="popup-content container-fluid">
                        <div className='d-flex align-items-center justify-content-between mb-2'>
                            <div className="fw-bold h5">Update Personal Information</div>
                            <span className="close h2" style={{ cursor: 'pointer' }} onClick={togglePopup}>&times;</span>
                        </div>
                        <div className="d-flex flex-column" style={{ width: '30%' }}>
                            <input
                                style={{ borderRadius: '5px' }}
                                className='mb-3'
                                type="text"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                style={{ borderRadius: '5px' }}
                                className='mb-3'
                                type="text"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <div className="d-flex justify-content-center">
                                <button onClick={handleSubmit} style={{
                                    borderRadius: '8px',
                                    padding: '5px',
                                    cursor: 'pointer',
                                    backgroundColor: 'rgb(76,166,166)',
                                    color: 'white',
                                }}>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Profile;
