import React from 'react'
import { GrLocation } from "react-icons/gr";

function Location() {
    return (
        <div className='location d-flex align-items-center justify-content-center' style={{
            position: "relative",
        }}>
            <input
                type="search"
                placeholder="Search for Location"
                className="form-control rounded-0"
                aria-label="Text input with dropdown button"
                style={{
                    position:"relative",
                    left:"-9px"
                }}
            />
                <GrLocation className="gap-1 "
                    style={{
                        fontSize: "28px",
                        position:"relative",
                        left:"-38px"
                    }} />
        </div>
    )
}

export default Location
