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

    // Step 1: Get user coordinates 
    function getCoordintes() {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;
            var lat = crd.latitude.toString();
            var lng = crd.longitude.toString();
            var coordinates = [lat, lng];
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
            getCity(coordinates);
            return;

        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    // Step 2: Get city name 
    function getCity(coordinates) {
        var xhr = new XMLHttpRequest();
        var lat = coordinates[0];
        var lng = coordinates[1];

        // Paste your LocationIQ token below. 
        xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.4b6add325ac7ac36b87329fdccb110d8&lat=" + 
            lat + "&lon=" + lng + "&format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);

        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var city = response.address.city;
                console.log(city);
                return;
            }
        }
    }

    getCoordintes();



    return (
        <div>
            <div className="d-flex text-center rounded-5" style={{ border: "1px solid black" }}>
                <button className="btn d-flex align-items-center justify-content-center" style={{ border: "none" }}>
                    <GrLocation className="gap-5"
                        style={{ fontSize: "30px" }} />
                    <div className="mt-0">
                        <p className="mb-0 fw-semibold .city">Nagpur: </p>
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
