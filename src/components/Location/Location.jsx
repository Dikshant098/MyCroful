import React from 'react'
import { GrLocation } from "react-icons/gr";

function Location() {
    return (
        <div>
            <div className="d-flex text-center rounded-5" style={{border:"1px solid black"}}>
                <button className="btn d-flex align-items-center justify-content-center" style={{border:"none"}}>
                    <GrLocation className="gap-5"
                        style={{ fontSize: "30px" }} />
                    <div className="mt-0">
                        <p className="mb-0 fw-semibold">Nagpur: </p>
                        <p className="mb-1 fw-semibold">441001 </p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Location
