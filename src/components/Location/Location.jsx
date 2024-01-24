import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { GrLocation } from "react-icons/gr";
// import { geolocated } from "react-geolocated";
import axios from 'axios'

function Location() {

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:2023/api/location/getLocation')
            console.log(response.data)
        }
        fetchData();
    }, [])

    const [location, setLocation]= useState({})



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
