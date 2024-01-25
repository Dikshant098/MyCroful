import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { GrLocation } from "react-icons/gr";
// import { geolocated } from "react-geolocated";
import axios from 'axios'
import '../Location/location.scss'

function Location() {

    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:2023/api/location/getLocation');
                console.log(response.data);
                setLocationData(response.data[0].components);
            } catch (error) {
                console.error('Error fetching location data:', error.message);
                setError('Failed to fetch location data');
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <div className="d-flex text-center rounded-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ border: '1px solid black' }}>
                <button className="btn d-flex align-items-center justify-content-center" style={{ border: 'none' }}>
                    <GrLocation className="gap-5" style={{ fontSize: '30px' }} />
                    <div className="mt-0 d-flex">
                        {locationData ? (
                            <>
                                <p className="mb-0 fw-semibold ml-2">{locationData.school}</p>
                                <p className="mb-1 fw-semibold"> :{locationData.postcode}</p>
                            </>
                        ) : (
                            <p className="mb-0">Loading location...</p>
                        )}
                    </div>
                </button>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Choose Your Location</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <input type="text" className="form-control" id="searchInput" placeholder="Search for your location.." />
                            </div>
                            <div className="mb-3">
                                <p>Detect current location</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Location
