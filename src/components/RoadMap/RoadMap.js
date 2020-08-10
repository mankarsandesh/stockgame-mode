import React from 'react'
import "./RoadMap.css";
import TableTrendMap from "components/TrandMap/TableTrendMap";

function RoadMap() {
    return (
        <div className="roadMap__wrapper">

            <div className="roadMap__option">
                <button className="firstDigit" >First Digit </button>
                <button className="lastDigit" >last Digit </button>
                <button className="bothDigit" >Both Digit </button>
                <button className="twoDigit" >TWO Digit </button>
            </div>
            <div className="roadMap__data">
                <TableTrendMap />
                <TableTrendMap />
                <TableTrendMap />
                <TableTrendMap />
            </div>

        </div>
    )
}

export default RoadMap
