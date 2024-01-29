import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { GrLocation } from "react-icons/gr";
// import { geolocated } from "react-geolocated";
import axios from 'axios'
import '../Location/location.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setLocationDetails } from '../../redux/location/locationAction';


function Location() {

    // const [location, setLocation] = useState(null);
    // const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const locationReducerResponse = useSelector((state) => state.locationReducer);
    const { loading, success, payload } = locationReducerResponse;

    const fetchData = async () => {
        try {
            const obj = {
                latitude: latitude,
                longitude: longitude
            }
            const {data} = await axios.post('http://localhost:2023/api/location/getLocation', obj);
            console.log(data);
            setLocation(data);
            dispatch(setLocationDetails(obj))

        } catch (error) {
            console.error('Error fetching location data:', error.message);
            setError('Failed to fetch location data');
        }
    }

    useEffect(() => {
        // console.log(location);
    }, [location, latitude, longitude])

    const handleLocation = () => {
        const askForLocationPermission = () => {
            // Check if Geolocation is supported by the browser
            if (navigator.geolocation) {
                // Clear the previous location and error
                // setLocation(null);
                // setError(null);

                // Request location permission
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLatitude(21.364774240243623)
                        setLongitude(79.12123326018552)
                        fetchData();
                    },
                    (error) => {
                        setError(error.message);
                    }
                );
            } else {
                setError('Geolocation is not supported by your browser.');
            }
        };

        // Ask for location permission every time the button is clicked
        askForLocationPermission();
    }


    return (
        <div>
            <div className="d-flex text-center rounded-5" style={{ border: '1px solid black' }} onClick={handleLocation}>
                <button className="btn d-flex align-items-center justify-content-center" style={{ border: 'none' }}>
                    <GrLocation className="gap-5 me-2" style={{ fontSize: '25px', fontWeight: '400' }} />
                    <div className="mt-0 d-flex">
                        {location ? (
                            <>
                                <p className="mb-0 fw-semibold ml-2">{location?.address.city}</p>
                                <p className="mb-0 fw-semibold ml-2"> : {location?.address.postcode}</p>
                                {/* <p className="mb-1 fw-semibold"> :{location}</p> */}
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
