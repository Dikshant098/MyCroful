import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { GrLocation } from "react-icons/gr";
import { geolocated } from "react-geolocated";

function Location() {

    // const [location, setLocation] = useState({
    //     loaded: false,
    //     coordinates: { lat: "", lng: "" }
    // })

    // const apiKey = "8f155424f95e18b18b9169c786e9bed8";
    // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



    // const onSuccess = location => {
    //     setLocation({
    //         loaded: true,
    //         coordinates: {
    //             lat: location.coords.latitude,
    //             lng: location.coords.longitude,
    //         }
    //     })
    // }

    // const onError = error => {
    //     setLocation({
    //         loaded: true,
    //         error
    //     })
    // }

    // useEffect(() => {
    //     if (!("geolocation" in navigator)) {
    //         onError({
    //             code: 0,
    //             message: "geolocation is not supported"
    //         })
    //     }

    //     navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // }, [])


    return (
        <div>
            <div className="d-flex text-center rounded-5" style={{ border: "1px solid black" }}>
                <button className="btn d-flex align-items-center justify-content-center" style={{ border: "none" }}>
                    <GrLocation className="gap-5"
                        style={{ fontSize: "30px" }} />
                    <div className="mt-0 d-flex">
                        <p className="mb-0 fw-semibold ml-2">Nagpur: </p>
                        <p className="mb-1 fw-semibold">441001 </p>
                    </div>
                </button>
                <div>
                    {/* {location.loaded ? JSON.stringify(location) : "Location Data not available yet."} */}
                </div>
            </div>
        </div>
    )
}

export default Location
