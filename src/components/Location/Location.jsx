import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { GrLocation } from "react-icons/gr";
// import { geolocated } from "react-geolocated";
import axios from 'axios'

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

    const [location, setLocation] = useState({})



    return (
        <div>
            <div className="d-flex text-center rounded-5" style={{ border: '1px solid black' }}>
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
        </div>
    );

};

export default Location
